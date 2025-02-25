import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   reactStrictMode: true,
   trailingSlash: true,
   assetPrefix: './',
   skipTrailingSlashRedirect: true,
   images: {
      disableStaticImages: false,
      unoptimized: true
   },
   output: 'export',
   basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : ''
};

export default nextConfig;

// skipMiddlewareUrlNormalize: true,
