'use client';

import dynamic from 'next/dynamic';

export const PdfDynamicViewer = dynamic(() => import('@/app/components/features/pdfViewer'), {
   ssr: false
});

// export const DynamicLoader = async (url: string) => {
//    return dynamic(() => import(url), {
//       ssr: false
//    });
// };
