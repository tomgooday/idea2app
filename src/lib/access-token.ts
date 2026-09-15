/**
 * Stateless, DB-free access token for gating DIY/PRO content after a
 * Lemon Squeezy purchase - see PRD Section 23's "DIY/PRO delivery & access
 * mechanism" decision.
 *
 * This is a deliberate stopgap: a signed, expiring value stored in a
 * cookie, not a real accounts/entitlements table. It grants access in the
 * browser that completed checkout; it does not follow the customer to
 * another device. Real multi-device entitlement needs auth + a database
 * (Build Pass 2).
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import type { PlanSlug } from "@/lib/lemonsqueezy";

export const ACCESS_COOKIE_NAME = "i2a_access";

export type AccessTokenPayload = {
  plan: PlanSlug;
  email: string;
  orderId: string;
  /** Issued-at, ms since epoch. */
  iat: number;
};

function getSecret(): string {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) {
    throw new Error(
      "ACCESS_TOKEN_SECRET is not set - required to sign/verify access tokens."
    );
  }
  return secret;
}

function sign(body: string): string {
  return createHmac("sha256", getSecret()).update(body).digest("base64url");
}

/** Signs a payload into an opaque `body.signature` token for a cookie value. */
export function signAccessToken(payload: Omit<AccessTokenPayload, "iat">): string {
  const full: AccessTokenPayload = { ...payload, iat: Date.now() };
  const body = Buffer.from(JSON.stringify(full)).toString("base64url");
  return `${body}.${sign(body)}`;
}

/**
 * Verifies a token's signature and returns its payload, or `null` if it's
 * missing, malformed, or tampered with.
 */
export function verifyAccessToken(
  token: string | undefined | null
): AccessTokenPayload | null {
  if (!token) return null;
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  const expected = sign(body);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    return JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

/** DIY content is unlocked by either a DIY or a PRO purchase; PRO content needs PRO. */
export function grantsAccess(payload: AccessTokenPayload | null, plan: PlanSlug): boolean {
  if (!payload) return false;
  if (plan === "diy") return payload.plan === "diy" || payload.plan === "pro";
  return payload.plan === "pro";
}
