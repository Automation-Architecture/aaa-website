import { brandConfig } from "@/config";

const BRAND_TEAL = "#004d43";
const BRAND_BLACK = "#010101";
const BRAND_GRAY = "#4a4a4a";
const BRAND_OFFWHITE = "#f7f7f5";

type BuildOpts = {
  siteUrl: string;
  /** Absolute URL to logo image (e.g. https://example.com/images/logo-footer.png) */
  logoUrl: string;
};

/**
 * Table-based transactional HTML for email clients.
 */
export function buildNewsletterConfirmationEmailHtml({
  siteUrl,
  logoUrl,
}: BuildOpts): string {
  const safeSite = siteUrl.replace(/\/$/, "");
  const brandName = brandConfig.NAME;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brandName}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND_OFFWHITE};font-family:Georgia,'Times New Roman',serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${BRAND_OFFWHITE};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#ffffff;border:1px solid #e0e0e0;border-radius:4px;overflow:hidden;">
          <tr>
            <td style="padding:32px 28px 24px;text-align:center;border-bottom:3px solid ${BRAND_TEAL};">
              <img src="${logoUrl}" alt="${brandName}" width="280" style="max-width:100%;height:auto;display:inline-block;" />
            </td>
          </tr>
          <tr>
            <td style="padding:28px 28px 8px;">
              <p style="margin:0 0 12px;font-size:18px;font-weight:bold;color:${BRAND_BLACK};line-height:1.3;">Thank you for subscribing</p>
              <p style="margin:0;font-size:15px;color:${BRAND_GRAY};line-height:1.6;">
                We have received your details and added you to our list. You will hear from us with updates about AI automation and how we help businesses build lasting operational systems.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 32px;text-align:center;">
              <a href="${safeSite}" style="display:inline-block;padding:14px 28px;background-color:${BRAND_TEAL};color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;letter-spacing:0.06em;text-transform:uppercase;border-radius:0.375rem;">
                Back to website
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px;background-color:${BRAND_OFFWHITE};border-top:1px solid #e8e8e8;">
              <p style="margin:0;font-size:12px;color:${BRAND_GRAY};line-height:1.5;text-align:center;">
                ${brandName}<br />
                <a href="${safeSite}" style="color:${BRAND_TEAL};text-decoration:none;">${safeSite.replace(/^https?:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function newsletterConfirmationSubject(): string {
  return `You're on the list — ${brandConfig.NAME}`;
}
