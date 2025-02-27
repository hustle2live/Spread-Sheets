'use client';

import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { BaseUrl } from '../common/constants';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Link from 'next/link';
// import { useEffect, useRef } from 'react';

const worker = `${BaseUrl}/pdf.worker.min.mjs`;

pdfjs.GlobalWorkerOptions.workerSrc = worker;

export type TProps = { url: string };

const PdfViewerComponent: React.FC<TProps> = ({ url }: TProps) => {
   // const iframeRef = useRef<HTMLIFrameElement>(null);

   console.log('imported url:' + url);

   // const addScrollBarStyle = () => {
   //    if (!iframeRef.current) return;
   //    iframeRef.current.classList.add('pdf-container');
   // };

   // useEffect(() => {
   //    if (!iframeRef.current) return;
   //    iframeRef.current.addEventListener('DOMContentLoaded', addScrollBarStyle);
   //    return () => iframeRef.current?.removeEventListener('DOMContentLoaded', addScrollBarStyle);
   // }, []);

   return (
      <div className='pdf-viewer relative h-full w-full overflow-hidden text-xs'>
         <Link
            href={url}
            target='_blank'
            className='controls absolute right-2 top-2 z-10 size-7 p-1 bg-gray-800 text-slate-50'
         >
            <ArrowsPointingOutIcon />
         </Link>
         <iframe
            // ref={iframeRef}
            allowFullScreen={true}
            src={url}
            title='pdf file'
            className='pdf-container w-full h-full'
         />
      </div>
   );
};

export default PdfViewerComponent;
