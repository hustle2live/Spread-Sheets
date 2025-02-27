'use client';

import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BaseUrl } from '@/components/common/constants';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import dynamic from 'next/dynamic';

const options = {
   cMapUrl: '/cmaps/'
};

const worker = `${BaseUrl}/pdf.worker.min.mjs`;

pdfjs.GlobalWorkerOptions.workerSrc = worker;

export type TProps = { url: string };

const PdfReactViewer: React.FC<TProps> = ({ url }: TProps) => {
   const [numPages, setNumPages] = useState<number | null>(null);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [scale, setScale] = useState<number>(1);
   const [width, setWidth] = useState<number>(600);

   const containerRef = useRef<HTMLDivElement>(null);

   const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages ?? 1));
   const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

   const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 4));
   const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

   useEffect(() => {
      const updateWidth = () => {
         if (containerRef.current) {
            setWidth(containerRef.current.clientWidth);
         }
      };
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
   }, []);

   console.log('imported url:' + url);

   return (
      <div className='pdf-viewer relative h-full w-full overflow-hidden text-xs'>
         <Link href={url} target='_blank' className='controls absolute right-3 top-3 z-10 size-7 p-1 bg-slate-50'>
            <ArrowsPointingOutIcon />
         </Link>

         <div className='controls absolute left-1/2 -translate-x-1/2 z-10 bg-slate-50 rounded-full p-2 px-3 bottom-2 flex flex-nowrap text-nowrap'>
            <button onClick={goToPrevPage} disabled={pageNumber === 1}>
               ⬅️
            </button>
            <span>
               Сторінка {pageNumber} з {numPages ?? '?'}
            </span>
            <button onClick={goToNextPage} disabled={pageNumber === numPages}>
               ➡️
            </button>
            <div className='px-2'>|</div>
            <button onClick={zoomOut}>➖</button>
            <span>Масштаб: {(scale * 100).toFixed(0)}%</span>
            <button onClick={zoomIn}>➕</button>
         </div>

         <div ref={containerRef} className='pdf-container absolute w-full h-full left-0 top-0 overflow-scroll'>
            <Document
               options={options}
               className='pdf-document'
               file={url}
               onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
               <Page key={pageNumber} pageNumber={pageNumber} width={width * scale} />
            </Document>
         </div>
      </div>
   );
};



export const PdfDynamicViewer = dynamic(() => import('@/app/components/features/pdfViewer'), { ssr: false });

export default PdfReactViewer;


// 'use client';

// import dynamic from 'next/dynamic';

// export const PdfDynamicViewer = dynamic(() => import('@/app/components/features/pdfViewer'), {
//    ssr: false
// });

// export const DynamicLoader = async (url: string) => {
//    return dynamic(() => import(url), {
//       ssr: false
//    });
// };

// export default PdfViewerComponent;
