/**
 * Post-checkout landing route.
 *
 * Configure this as the Redirect URL / receipt button link on the DIY and
 * PRO products in the Lemon Squeezy dashboard, using their `[order_id]`
 * link variable (see PRD Section 23):
 *
 *   https://idea2app.co/access?order_id=[order_id]
 *
 * On a valid, paid order it grants access (see `src/lib/access-token.ts`
 * for why this is a stateless cookie, not real accounts) and redirects
 * into the gated content. On anything else it sends the customer back to
 * pricing with an `error` query param rather than a raw 500.
 *
 * Not a substitute for webhooks as the source of truth for fulfilment -
 * see the caveat on `getOrder` in `src/lib/lemonsqueezy.ts`.
 */
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE_NAME, signAccessToken } from "@/lib/access-token";
import { getOrder, planForVariantId } from "@/lib/lemonsqueezy";

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("order_id");
  const pricingUrl = new URL("/pricing", request.url);

  if (!orderId) {
    pricingUrl.searchParams.set("access_error", "missing_order_id");
    return NextResponse.redirect(pricingUrl);
  }

  const order = await getOrder(orderId);
  if (!order) {
    pricingUrl.searchParams.set("access_error", "order_not_found");
    return NextResponse.redirect(pricingUrl);
  }

  const expectedStoreId = process.env.LEMONSQUEEZY_STORE_ID;
  if (expectedStoreId && String(order.storeId) !== expectedStoreId) {
    pricingUrl.searchParams.set("access_error", "store_mismatch");
    return NextResponse.redirect(pricingUrl);
  }

  if (order.status !== "paid") {
    pricingUrl.searchParams.set("access_error", "order_not_paid");
    return NextResponse.redirect(pricingUrl);
  }

  const plan = planForVariantId(order.variantId);
  if (!plan) {
    pricingUrl.searchParams.set("access_error", "unknown_product");
    return NextResponse.redirect(pricingUrl);
  }

  const token = signAccessToken({ plan, email: order.userEmail, orderId: order.id });

  const cookieStore = await cookies();
  cookieStore.set(ACCESS_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    // "Lifetime access to updates" per the DIY/PRO feature list - one year,
    // refreshed on next visit rather than a true forever cookie.
    maxAge: 60 * 60 * 24 * 365,
  });

  const destination = new URL("/steps", request.url);
  destination.searchParams.set("welcome", plan);
  return NextResponse.redirect(destination);
}
