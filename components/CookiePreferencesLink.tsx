"use client";

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.revisitCkyConsent?.()}
      className="text-sm text-brand-gray hover:text-brand-lime transition-colors"
    >
      Cookie Preferences
    </button>
  );
}
