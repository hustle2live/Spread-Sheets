'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

type TProps = { url: string };

const PdfViewer: React.FC<TProps> = ({ url }: TProps) => {
   const [numPages, setNumPages] = useState<number | null>(null);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [scale, setScale] = useState<number>(1); // 🔥 Масштаб
   const containerRef = useRef<HTMLDivElement>(null);
   const [width, setWidth] = useState<number>(600);

   useEffect(() => {
      function updateWidth() {
         if (containerRef.current) {
            setWidth(containerRef.current.clientWidth);
         }
      }
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
   }, []);

   // 🔹 Функція зміни сторінки
   const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
   const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

   // 🔹 Функції зміни масштабу
   const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
   const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

   return (
      <div className='pdf-viewer absolute h-full w-auto'>
         {/* Панель керування */}
         <div className='toolbar'>
            <button onClick={goToPrevPage} disabled={pageNumber === 1}>
               ⬅️
            </button>
            <span>
               Сторінка {pageNumber} з {numPages || '?'}
            </span>
            <button onClick={goToNextPage} disabled={pageNumber === numPages}>
               ➡️
            </button>

            <button onClick={zoomOut}>➖</button>
            <span>Масштаб: {(scale * 100).toFixed(0)}%</span>
            <button onClick={zoomIn}>➕</button>
         </div>

         {/* PDF */}
         <div ref={containerRef} className='pdf-container'>
            <Document className='pdf-document' file={url} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
               <Page key={pageNumber} pageNumber={pageNumber} width={width * scale} />
            </Document>
         </div>
      </div>
   );
};

//    const [numPages, setNumPages] = useState<number | null>(null);

//    return (
//       <div className='pdf-container'>
//          <Document file={url} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
//             {Array.from(new Array(numPages), (_, index) => (
//                <Page key={`page_${index + 1}`} width={380} pageNumber={index + 1} />
//             ))}
//          </Document>
//       </div>
//    );
// };

export default PdfViewer;
