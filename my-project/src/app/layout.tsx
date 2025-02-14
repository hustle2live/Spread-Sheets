import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
   title: 'Yuras SpreadSheets',
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
