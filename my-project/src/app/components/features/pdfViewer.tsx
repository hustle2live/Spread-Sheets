'use client';

import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import { BaseUrl } from '../common/constants';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { imageLoader } from './imageLoader';

const worker = `${BaseUrl}/pdf.worker.min.mjs`;

pdfjs.GlobalWorkerOptions.workerSrc = worker;

export type TProps = { url: string };

const PdfViewerComponent: React.FC<TProps> = ({ url }: TProps) => {
   const [origin, setOrigin] = useState('');

   useEffect(() => {
      if (typeof window !== 'undefined') {
         setOrigin(window.location.origin.concat(url));
      }
   }, []);

   return (
      <div className='pdf-viewer relative h-full w-full overflow-hidden text-xs'>
         <Link
            href={origin}
            prefetch={false}
            target='_blank'
            className='controls absolute right-2 top-2 z-10 size-7 p-1 bg-gray-800 text-slate-50'
         >
            <ArrowsPointingOutIcon />
         </Link>
         <iframe
            allowFullScreen
            allow='fullscreen; clipboard-read; clipboard-write; autoplay; encrypted-media'
            width='100%'
            height='100%'
            style={{ border: 'none' }}
            src={url}
            title='pdf_file'
            className='pdf-container w-full h-full hidden md:block'
         />
         <Image
            className='block md:hidden'
            src={origin.slice(0, -3).concat('jpg')}
            alt='table'
            loader={imageLoader}
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center center' }}
         />
      </div>
   );
};

export default PdfViewerComponent;
