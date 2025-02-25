import type { Metadata } from 'next';

import './globals.scss';

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
      <html lang='uk'>
         <body>{children}</body>
      </html>
   );
}
