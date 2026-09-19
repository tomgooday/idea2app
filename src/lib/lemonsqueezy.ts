/**
 * Lemon Squeezy integration helpers.
 *
 * Lemon Squeezy is the decided merchant of record for DIY/PRO checkout -
 * see PRD Section 23. This module is deliberately dependency-free (plain
 * `fetch` against their REST API) rather than pulling in the
 * `@lemonsqueezy/lemonsqueezy.js` SDK, to match the project's existing
 * lean-dependency style.
 *
 * Nothing here is wired up in production yet - the store and DIY/PRO
 * products don't exist in Lemon Squeezy yet, so these env vars are unset
 * and `getCheckoutUrl` falls back to `null` (pricing.ts falls back to the
 * `mailto:` placeholder in that case). See Section 24's known gaps.
 */

export type PlanSlug = "diy" | "pro";

const LEMONSQUEEZY_API_BASE = "https://api.lemonsqueezy.com/v1";

/**
 * Important: Lemon Squeezy uses two different identifiers per variant -
 * a numeric ID (e.g. `2145225`), which is what appears in order/webhook
 * payloads (`first_order_item.variant_id`), and a separate UUID (e.g.
 * `58d330e9-374d-4be0-9e22-5c198e0990c7`) used in the hosted checkout URL
 * (`/checkout/buy/{uuid}`). They are NOT interchangeable.
 *
 * `LEMONSQUEEZY_*_VARIANT_ID` (numeric) is used by `planForVariantId` to
 * identify a paid order. `LEMONSQUEEZY_*_CHECKOUT_URL` (the full buy_now_url
 * from the product/variant API response) is used by `getCheckoutUrl`. Get
 * both from `GET /v1/products?include=variants` rather than guessing.
 */
function getVariantId(plan: PlanSlug): string | undefined {
  return plan === "diy"
    ? process.env.LEMONSQUEEZY_DIY_VARIANT_ID
    : process.env.LEMONSQUEEZY_PRO_VARIANT_ID;
}

/**
 * Returns the Lemon Squeezy hosted "buy" checkout link for a plan.
 *
 * Returns `null` if that plan's checkout URL isn't configured yet, so
 * callers can fall back to a placeholder.
 */
export function getCheckoutUrl(plan: PlanSlug): string | null {
  const url =
    plan === "diy"
      ? process.env.LEMONSQUEEZY_DIY_CHECKOUT_URL
      : process.env.LEMONSQUEEZY_PRO_CHECKOUT_URL;
  return url || null;
}

export type LemonSqueezyOrder = {
  id: string;
  storeId: number;
  status: string;
  userEmail: string;
  variantId: string | null;
};

/**
 * Looks up an order by ID via the Lemon Squeezy API (server-side only -
 * requires `LEMONSQUEEZY_API_KEY`). Used by `/access` to verify a purchase
 * before granting access - see PRD Section 23's "DIY/PRO delivery & access
 * mechanism" decision.
 *
 * Note (per Lemon Squeezy's own docs): a redirect-based check like this is
 * fine for granting access in the customer's current browser, but isn't a
 * substitute for webhooks as the source of truth for fulfilment - a
 * customer who closes the tab before the redirect fires won't trigger
 * this. Revisit alongside real accounts/DB in Build Pass 2.
 */
export async function getOrder(orderId: string): Promise<LemonSqueezyOrder | null> {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  if (!apiKey) return null;

  const res = await fetch(`${LEMONSQUEEZY_API_BASE}/orders/${orderId}`, {
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  const json = await res.json();
  const attributes = json?.data?.attributes;
  if (!attributes) return null;

  return {
    id: String(json.data.id),
    storeId: Number(attributes.store_id),
    status: String(attributes.status),
    userEmail: String(attributes.user_email ?? ""),
    variantId:
      attributes.first_order_item?.variant_id != null
        ? String(attributes.first_order_item.variant_id)
        : null,
  };
}

/** Maps a Lemon Squeezy (numeric) variant ID back to which plan it corresponds to. */
export function planForVariantId(variantId: string | null): PlanSlug | null {
  if (!variantId) return null;
  if (variantId === getVariantId("diy")) return "diy";
  if (variantId === getVariantId("pro")) return "pro";
  return null;
}
