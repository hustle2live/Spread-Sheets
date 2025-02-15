'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import TTNJournal from '../assets/pdf/Salary-1.pdf';
// import TTNJournal from '@/public/pdf/Salary-1.pdf';

import FileSVG from '@/public/file.svg';
import WindowSVG from '@/public/window.svg';
import GlobeSVG from '@/public/globe.svg';

import { imageLoader } from '@/components/imageLoader';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import PdfViewer from './components/pdfViewer';

import Link from 'next/link';

export default function Home() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const myPdf = '@/assets/pdf/Salary-1.pdf';

   const navigation = [
      { name: 'menu', href: '#' },
      { name: 'tables', href: '#' },
      { name: 'item', href: '#' },
      { name: 'contacts', href: '#' }
   ];

   const router = useRouter();

   return (
      <div className='bg-white'>
         <header className='absolute inset-x-0 top-0 z-50'>
            <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
               <div className='flex lg:flex-1'>
                  <a href='#' className='-m-1.5 p-1.5'>
                     <span className='sr-only'>Your Company</span>
                     <img
                        alt=''
                        src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                        className='h-8 w-auto'
                     />
                  </a>
               </div>
               <div className='flex lg:hidden'>
                  <button
                     type='button'
                     onClick={() => setMobileMenuOpen(true)}
                     className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                  >
                     <span className='sr-only'>Open main menu</span>
                     <Bars3Icon aria-hidden='true' className='size-6' />
                  </button>
               </div>
               <div className='hidden lg:flex lg:gap-x-12'>
                  {navigation.map((item) => (
                     <a key={item.name} href={item.href} className='text-sm/6 font-semibold text-gray-900'>
                        {item.name}
                     </a>
                  ))}
               </div>
               <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                  <a href='#' className='text-sm/6 font-semibold text-gray-900'>
                     Log in <span aria-hidden='true'>&rarr;</span>
                  </a>
               </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
               <div className='fixed inset-0 z-50' />
               <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                  <div className='flex items-center justify-between'>
                     <a href='#' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Your Company</span>
                        <img
                           alt=''
                           src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                           className='h-8 w-auto'
                        />
                     </a>
                     <button
                        type='button'
                        onClick={() => setMobileMenuOpen(false)}
                        className='-m-2.5 rounded-md p-2.5 text-gray-700'
                     >
                        <span className='sr-only'>Close menu</span>
                        <XMarkIcon aria-hidden='true' className='size-6' />
                     </button>
                  </div>
                  <div className='mt-6 flow-root'>
                     <div className='-my-6 divide-y divide-gray-500/10'>
                        <div className='space-y-2 py-6'>
                           {navigation.map((item) => (
                              <a
                                 key={item.name}
                                 href={item.href}
                                 className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                              >
                                 {item.name}
                              </a>
                           ))}
                        </div>
                        <div className='py-6'>
                           <a
                              href='#'
                              className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                           >
                              Log in
                           </a>
                        </div>
                     </div>
                  </div>
               </DialogPanel>
            </Dialog>
         </header>

         <main id='main' className=''>
            <div className='relative isolate px-6 pt-14 lg:px-8'>
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
                  />
               </div>
               <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                  <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                     <div className='relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                        Announcing our next round of funding.{' '}
                        <a href='#' className='font-semibold text-indigo-600'>
                           <span aria-hidden='true' className='absolute inset-0' />
                           Read more <span aria-hidden='true'>&rarr;</span>
                        </a>
                     </div>
                  </div>
                  <div className='text-center'>
                     <h1 className='text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
                        Розкрийте секрети електронних таблиць.
                     </h1>
                     <p className='mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
                        Електронні таблиці - ваш інструмент для аналізу та обліку даних.
                        <br />
                        Розробка ефективних рішень для будь-якого бізнесу.
                     </p>
                     <div className='mt-10 flex gap-6 items-center justify-center flex-col sm:flex-row'>
                        <button
                           className='rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
                           onClick={() => {
                              router.push('/sign-up');
                           }}
                        >
                           Розпочати
                        </button>
                        <a
                           className='rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
                           href='#content'
                           rel='noopener noreferrer'
                        >
                           Дізнатися більше{' '}
                           <span className='ps-2' aria-hidden='true'>
                              →
                           </span>
                        </a>
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

            {/*             next section             */}

            <div id='content' className='bg-transparent py-24 flex flex-col items-center text-center'>
               <h2 className='text-4xl font-semibold tracking-tight text-balance text-gray-900'>
                  Як використовувати електронні таблиці?
               </h2>
               <p className='mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 w-1/2'>
                  Цей сайт присвячено темі розробки корисних і ефективних методів/можливостей використання електронних
                  таблиць у різних сферах діяльності
               </p>
               <div className='container mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  <div className='rounded-2xl border border-indigo-100 text-start'>
                     <div className='min-h-56 relative overflow-hidden'>
                        {/* <iframe
                           src='/Salary.pdf'
                           width='100%'
                           height='100%'
                           title='pdf file'
                        /> */}
                        {/* <Link
                           className='footer__oferta text-muted z-1 me-lg-5 flex-lg-shrink-1'
                           href={'/pdf/Salary-2.pdf'}
                           // href={'/Salary.pdf'}
                           target='_blank'
                        >
                           Оферта
                        </Link> */}
                        <PdfViewer url='/Salary.pdf' />
                     </div>
                     <hr className='w-full' />
                     <div className='p-6'>
                        <p className='my-2 text-indigo-300 font-semibold py-2'>Інформаційна таблиця</p>
                        <p>
                           Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для
                           зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною
                           багатосторінкового табличного файлу та виконувати певні функції у такому файлі.
                        </p>
                     </div>
                  </div>
                  <div className='rounded-2xl border border-indigo-100 text-start'>
                     <div className='min-h-56'></div>
                     <hr className='w-full' />
                     <div className='p-6'>
                        <p className='my-2 text-indigo-300 font-semibold py-2'>Розрахункова таблиця</p>
                        <p>
                           Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для
                           зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною
                           багатосторінкового табличного файлу та виконувати певні функції у такому файлі.
                        </p>
                     </div>
                  </div>
                  <div className='rounded-2xl border border-indigo-100 text-start'>
                     <div className='min-h-56'>
                        <iframe
                           src='../assets/pdf/Salary-1.pdf'
                           width='100%'
                           height='100%'
                           title='Embedded PDF Viewer'
                        ></iframe>
                     </div>
                     <hr className='w-full' />
                     <div className='p-6'>
                        <p className='my-2 text-indigo-300 font-semibold py-2'></p>
                        <p>
                           Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для
                           зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною
                           багатосторінкового табличного файлу та виконувати певні функції у такому файлі.
                        </p>
                     </div>
                  </div>
                  <div className='rounded-2xl border border-indigo-100 text-start'>
                     <div className='min-h-56'>
                        <iframe
                           src='../assets/pdf/Salary-1.pdf#toolbar=0'
                           width='100%'
                           height='100%'
                           title='Non-downloadable PDF Viewer'
                        ></iframe>
                     </div>
                     <hr className='w-full' />
                     <div className='p-6'>
                        <p className='my-2 text-indigo-300 font-semibold py-2'></p>
                        <p>
                           Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для
                           зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною
                           багатосторінкового табличного файлу та виконувати певні функції у такому файлі.
                        </p>
                     </div>
                  </div>
                  <div className='rounded-2xl border border-indigo-100 text-start'>
                     <div className='min-h-56'>
                        <object
                           data='../assets/pdf/Salary-1.pdf'
                           type='application/pdf'
                           width='100%'
                           height='100%'
                           title='Embedded PDF Viewer'
                        >
                           <iframe
                              data='../assets/pdf/Salary-1.pdf'
                              width='100%'
                              height='100%'
                              title='Fallback PDF Viewer'
                           >
                              <p>
                                 Your browser does not support PDFs.
                                 <a href='../assets/pdf/Salary-1.pdf'>Download the PDF</a>
                              </p>
                           </iframe>
                        </object>
                     </div>
                     <hr className='w-full' />
                     <div className='p-6'>
                        <p className='my-2 text-indigo-300 font-semibold py-2'></p>
                        <p>
                           Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для
                           зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною
                           багатосторінкового табличного файлу та виконувати певні функції у такому файлі.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </main>

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
      </div>
   );
}
