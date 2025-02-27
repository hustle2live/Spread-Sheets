import type { Metadata } from 'next';
import { PopupProvider } from '@/components/popup/popupContext';

import './globals.scss';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export const metadata: Metadata = {
   title: 'Yuras SpreadSheets - Електронні Таблиці Юрія',
   description: 'Побудова інтерактивних Таблиць на всі випадки життя'
};

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <PopupProvider>
         <html lang='uk'>
            <head>
               <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </head>
            <body>{children}</body>
         </html>
      </PopupProvider>
   );
}
