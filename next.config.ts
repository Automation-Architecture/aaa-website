import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "radix-ui",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "framer-motion",
    ],
  },
};

export default nextConfig;
