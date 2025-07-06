import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }
};

export default nextConfig;
