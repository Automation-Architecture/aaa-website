/**
 * Known GTM custom event names.
 * Extend this union as new events are added to the analytics spec.
 */
export type AnalyticsEvent =
  | "cta_click"
  | "nav_click"
  | "faq_expand"
  | "form_start"
  | "form_load_error"
  | "generate_lead"
  | "social_click"
  | "newsletter_subscribe";

/**
 * Push a custom event to the GTM dataLayer.
 *
 * Events:
 *  - cta_click       { cta_location }
 *  - nav_click       { nav_item }
 *  - faq_expand      { question }
 *  - form_start      (no params)
 *  - form_load_error (no params)
 *  - generate_lead   (no params)
 *  - social_click    { platform }
 *  - newsletter_subscribe { method }
 */
export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string>,
): void {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({ event, ...params });
  }
}
