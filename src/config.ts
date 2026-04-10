export const brandConfig = {
  NAME: "Automation Architecture AI",
  DESCRIPTION:
    "Done-for-you AI automation agency: we build AI Operating Systems (AIOS) for small businesses and startups — owned operational infrastructure, not another subscription to rent.",
  VERSION: "0.1.0",
  AUTHOR: "Automation Architecture AI",
  AUTHOR_EMAIL: "hello@automationarchitecture.ai",
  AUTHOR_URL: "https://automationarchitecture.ai",
} as const;

export const appConfig = {
  siteUrl: "https://automationarchitecture.ai",
} as const;

export const globalConfig = {
  API_URL: process.env.NEXT_PUBLIC_APP_API ?? "",
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV ?? "development",
  MOCK_EMAIL: process.env.NEXT_PUBLIC_MOCK_EMAIL ?? "user@gmail.com",
  MOCK_PASSWORD: process.env.NEXT_PUBLIC_MOCK_PASSWORD ?? "123456",
} as const;
