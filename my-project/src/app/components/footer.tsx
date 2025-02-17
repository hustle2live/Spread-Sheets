'use client';

import Image from 'next/image';
import FileSVG from '@/public/file.svg';
import WindowSVG from '@/public/window.svg';
import GlobeSVG from '@/public/globe.svg';

import { imageLoader } from '@/components/imageLoader';

const Footer: React.FC = () => {
   return (
      <footer className='py-24 row-start-3 flex gap-6 flex-wrap items-center justify-center'>
         <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
         >
            <Image loader={imageLoader} aria-hidden src={FileSVG} alt='File icon' width={16} height={16} />
            Learn
         </a>
         <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
         >
            <Image loader={imageLoader} aria-hidden src={WindowSVG} alt='Window icon' width={16} height={16} />
            Examples
         </a>
         <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
         >
            <Image loader={imageLoader} aria-hidden src={GlobeSVG} alt='Globe icon' width={16} height={16} />
            Go to nextjs.org →
         </a>
      </footer>
   );
};

export { Footer };
