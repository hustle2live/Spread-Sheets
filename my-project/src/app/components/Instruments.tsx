'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { imageLoader } from '@/app/components/features/imageLoader';

import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

import { usePopup } from './popup/popupContext';

import tableIconsBoth from '@/assets/pictures/xls-vs-sheets.png';
import Excel from '@/assets/pictures/MS-Excel-Masterclass-1.webp';
import Sheets from '@/assets/pictures/google-sheets-tables.png';

const Instruments: React.FC = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [duplicated, setDuplicated] = useState(false);
   const scrollReference = useRef<HTMLDivElement | null>(null);

   const { setShow } = usePopup();

   const handleScroll = () => {
      if (isVisible) {
         return window.removeEventListener('scroll', handleScroll);
      }
      if (!scrollReference.current) return;
      const rect = scrollReference.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isInView);
      scrollReference.current.setAttribute('data-animated', 'true');
   };

   const duplicateItems = async () => {
      if (duplicated) return;
      if (!scrollReference.current || !scrollReference.current?.firstChild) return;
      try {
         const scrollerInner = scrollReference.current.firstChild as HTMLUListElement;
         const scrollerContent = Array.from(scrollerInner.children) as HTMLLIElement[];
         scrollerContent.forEach((item) => {
            if (!item) return;
            const duplicatedItem = item.cloneNode(true) as HTMLLIElement;
            duplicatedItem.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(duplicatedItem);
         });
         setDuplicated(true);
      } catch {}
   };

   useEffect(() => {
      duplicateItems();
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   });

   return (
      <div className='container m-auto flex flex-col lg:flex-row flex-wrap gap-0 p-0 sm:p-6 md:px-12'>
         <div className='pt-14 sm:p-6 pb-0 sm:pb-6 sm:my-4 border-b border-dotted w-full  relative'>
            <h4 className='mb-4 sm:mb-2 my-2 font-semibold text-gray-900 text-2xl text-center sm:text-start'>
               Популярні інструменти
            </h4>
            <Image
               className='w-20 sm:w-32 h-auto absolute right-0 top-4 sm:right-20 sm:top-auto sm:bottom-3'
               src={tableIconsBoth}
               loader={imageLoader}
               alt='g-sheets vs excel'
               width={100}
               height={100}
            ></Image>
         </div>

         <div className='flex flex-col gap-6 p-6 px-4 pt-0 lg:pt-6 description w-full lg:w-3/5 font-medium text-pretty text-gray-500 text-lg/6'>
            <div ref={scrollReference} className='scroller w-full p-4 px-0 -ms-3 overflow-hidden' data-animated='false'>
               <ul className='scroller__inner flex flex-nowrap gap-6 w-max'>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-fuchsia-300 text-fuchsia-700 font-medium text-opacity-85 '>
                     Облік
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-green-200 text-green-700 font-medium text-opacity-85 '>
                     Аудит
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-orange-200 text-orange-700 font-medium text-opacity-85 '>
                     Звітність{' '}
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-indigo-200 text-indigo-700 font-medium text-opacity-85 '>
                     Фінанси
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-fuchsia-300 text-fuchsia-700 font-medium text-opacity-85 '>
                     База даних
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-green-200 text-green-700 font-medium text-opacity-85 '>
                     Маркетинг та аналітика
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-orange-200 text-orange-700 font-medium text-opacity-85 '>
                     Автоматизація бізнес-процесів
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-indigo-200 text-indigo-700 font-medium text-opacity-85 '>
                     Розклад та планування
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-fuchsia-200 text-fuchsia-500 font-medium text-opacity-85 '>
                     Логістика
                  </li>
                  <li className='text-nowrap p-1 px-3 bg-opacity-20 rounded-full text-base bg-green-300 text-green-700 font-medium text-opacity-85 '>
                     Кадровий облік
                  </li>
               </ul>
            </div>
            <p>
               Найбільш розповсюдженими електронними таблицями, які наразі використовує пересічний користувач, є{' '}
               <strong className='text-gray-800'>Excel</strong> та{' '}
               <strong className='text-gray-800'>Google Sheets</strong>.
               <br /> Вони допомагають у веденні розрахунків, аналізі даних і автоматизації процесів.
            </p>

            <div className='flex lg:hidden m-auto justify:center mb-3 w-5/6 sm:w-3/4 md:w-3/5 lg:w-2/5 position-relative lg:mt-20 lg:-ms-5'>
               <div className='card w-1/2 h-auto sm:h-44 rounded-xl shadow-gray-200/50 shadow-lg border border-gray-200 overflow-hidden -rotate-6'>
                  <Image
                     alt='table'
                     src={Sheets}
                     loader={imageLoader}
                     width={100}
                     height={100}
                     className='w-full h-full'
                  ></Image>
               </div>
               <div className='card w-1/2 h-auto sm:h-44 rounded-xl shadow-gray-200/50  shadow-lg border border-gray-200 overflow-hidden -rotate-3 -ms-10 z-10'>
                  <Image
                     alt='table'
                     loader={imageLoader}
                     src={Excel}
                     width={100}
                     height={100}
                     className='w-full h-full'
                  ></Image>
               </div>
            </div>

            <p>
               <strong className='text-gray-800'>На цьому сайті</strong> ви знайдете цікаві розробки, створені автором.
               Можливо, вони надихнуть вас на власні проекти або допоможуть удосконалити те, що ви вже використовуєте.
            </p>
            <p>Ви можете отримати консультації автора, чи замовити проект для реалізації своїх власних задач</p>
            <button
               className='rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base py-2 px-4 w-auto m-auto ms-0 mt-1 font-medium'
               onClick={() => setShow(true)}
            >
               Отримати консультацію <ArrowUpRightIcon className='-ms-1 size-6' />
            </button>
         </div>

         <div className='hidden lg:flex w-2/5 position-relative mt-20 -ms-5'>
            <div className='card w-1/2 h-44 rounded-xl shadow-gray-200/50 shadow-lg border border-gray-200 overflow-hidden -rotate-6'>
               <Image
                  alt='table'
                  src={Sheets}
                  loader={imageLoader}
                  width={100}
                  height={100}
                  className='w-full h-full'
               ></Image>
            </div>
            <div className='card w-1/2 h-44 rounded-xl shadow-gray-200/50  shadow-lg border border-gray-200 overflow-hidden -rotate-3 -ms-10 z-10'>
               <Image
                  alt='table'
                  loader={imageLoader}
                  src={Excel}
                  width={100}
                  height={100}
                  className='w-full h-full'
               ></Image>
            </div>
         </div>
      </div>
   );
};

export { Instruments };
