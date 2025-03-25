'use client';

import Image from 'next/image';
import FileSVG from '@/public/file.svg';
import WindowSVG from '@/public/window.svg';
import GlobeSVG from '@/public/globe.svg';

import { imageLoader } from '@/app/components/features/imageLoader';
import Link from 'next/link';

const Footer: React.FC = () => {
   return (
      <footer className='py-24 row-start-3 flex gap-6 flex-wrap items-center justify-center'>
         <Link
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org/learn'
            target='_blank'
            rel='noopener noreferrer'
         >
            <Image loader={imageLoader} aria-hidden src={FileSVG} alt='File icon' width={16} height={16} />
            Learn
         </Link>
         <Link
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://vercel.com/templates?framework=next.js'
            target='_blank'
            rel='noopener noreferrer'
         >
            <Image loader={imageLoader} aria-hidden src={WindowSVG} alt='Window icon' width={16} height={16} />
            Examples
         </Link>
         <Link
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org'
            target='_blank'
            rel='noopener noreferrer'
         >
            <Image loader={imageLoader} aria-hidden src={GlobeSVG} alt='Globe icon' width={16} height={16} />
            Go to nextjs.org →
         </Link>
      </footer>
   );
};

export { Footer };
