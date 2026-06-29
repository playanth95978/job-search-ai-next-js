import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Évite l'avertissement « inferred workspace root » dû à un package-lock.json parasite plus haut dans l'arborescence
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
