import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   reactStrictMode: true,
   trailingSlash: true,
   assetPrefix: '.',
   images: { unoptimized: true },
   output: 'export'
   // basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? ''
   // distDir: './build'
};

export default nextConfig;
