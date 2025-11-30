// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */
  
  allowedDevOrigins: [
    "local-origin.dev", // Remplacez par vos origines autorisées
    "192.168.88.14"     // Votre adresse IP locale
  ],
};

export default nextConfig;