import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   reactStrictMode: true,
   images: {
      disableStaticImages: false,
      unoptimized: true
   },
   output: 'export',
   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
   basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
   compiler: { styledComponents: true },
   experimental: {
      serverComponentsHmrCache: false // defaults to true
   }
};
// assetPrefix: '',
// trailingSlash: false,
// assetPrefix: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : '',
// basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : '',

export default nextConfig;

// skipTrailingSlashRedirect: true,
// skipMiddlewareUrlNormalize: true,
// compiler: {
//    styledComponents: true
// }

// trailingSlash: false,
// experimental: {
//    appDocumentPreloading: false
// }
// skipTrailingSlashRedirect: true,
// skipMiddlewareUrlNormalize: true,

// trailingSlash: true,
// basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH ?? '' : ''

// async redirects() {
//    return [
//       {
//          source: '/pdf/:path*.txt',
//          destination: '/pdf/:path*',
//          permanent: true
//       }
//    ];
// },

// async headers() {
//    return [
//       {
//          source: '/pdf/:path*', // Всі PDF-файли
//          headers: [
//             {
//                key: 'Content-Type',
//                value: 'application/pdf'
//             },
//             {
//                key: 'Cache-Control',
//                value: 'public, max-age=31536000, immutable'
//             }
//          ]
//       }
//    ];
// }
