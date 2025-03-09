'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { imageLoader } from './features/imageLoader';
import abstractLines from '@/assets/pictures/abstract/lines(2).png';

const Hero = () => {
   const router = useRouter();

   return (
      <div
         style={{ minHeight: '80vh' }}
         className='mx-auto relative overflow-hidden isolate px-6 pt-0 lg:px-8 flex justify-center'
      >
         <div
            aria-hidden='true'
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
         >
            <div
               style={{
                  clipPath:
                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
               }}
               className='relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            ></div>
         </div>

         <Image
            className='absolute left-0 top-0 opacity-10'
            style={{ width: '100%', height: 'auto' }}
            src={abstractLines}
            loader={imageLoader}
            alt='abstract lines'
         ></Image>

         <div className='content hero__content m-auto pb-5'>
            <div className='hero__content_main text-center h-auto flex flex-col items-center gap-0'>
               <section style={{ width: 'fit-content', zIndex: 3 }} className='flex justify-center py-8 '>
                  <div className='relative w-full rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                     Announcing our next round of funding.{' '}
                     <Link href='/public-accounting' className='font-semibold text-indigo-600'>
                        <span aria-hidden='true' className='absolute inset-0' />
                        Read more <span aria-hidden='true'>&rarr;</span>
                     </Link>
                  </div>
               </section>

               <h1
                  style={{ width: 'fit-content', zIndex: 3 }}
                  className='text-5xl py-5 font-bold tracking-tight text-balance text-gray-900 sm:text-7xl'
               >
                  Розкрийте секрети електронних таблиць
               </h1>

               <p
                  style={{ borderTop: 'none', width: 'fit-content' }}
                  className='py-5 px-5 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'
               >
                  Електронні таблиці - ваш інструмент для{' '}
                  <strong className='text-gray-900'> аналізу та обліку даних</strong>.
                  <br />
                  Розробка ефективних рішень для будь-якого бізнесу.
               </p>

               <div
                  style={{ borderTop: 'none', width: 'fit-content' }}
                  className='py-5 px-10 flex gap-6 items-center justify-center flex-col sm:flex-row'
               >
                  <button
                     className='rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
                     onClick={() => {
                        router.push('/documents-formation');
                     }}
                  >
                     Розпочати
                  </button>
                  <Link
                     className='rounded-lg border border-solid border-black/[.8] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
                     href='#content'
                     rel='noopener noreferrer'
                  >
                     Дізнатися більше{' '}
                     <span className='ps-2' aria-hidden='true'>
                        →
                     </span>
                  </Link>
               </div>
            </div>
         </div>
         <div
            aria-hidden='true'
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
         >
            <div
               style={{
                  clipPath:
                     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
               }}
               className='relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            />
         </div>
      </div>
   );
};

export { Hero };
