import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }
};

export default nextConfig;
