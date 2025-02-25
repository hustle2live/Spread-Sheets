'use client';

import React, { useRef, useState, useEffect } from 'react';

import Image from 'next/image';
import { imageLoader } from '../components/imageLoader';

import tableIconsBoth from '@/assets/pictures/xls-vs-sheets.png';
import Excel from '@/assets/pictures/MS-Excel-Masterclass-1.webp';
import Sheets from '@/assets/pictures/google-sheets-tables.png';

import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const TablesContent: React.FC = () => {
   const [isVisible, setIsVisible] = useState(false);
   const scrollReference = useRef<HTMLDivElement | null>(null);

   const duplicateItems = async () => {
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
      } catch {}
   };

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

   useEffect(() => {
      duplicateItems();
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   });

   return (
      <div className='container m-auto flex flex-wrap p-12 py-6 gap-0'>
         <div className='p-6 border-b border-dotted w-full my-4 relative'>
            <h4 className='my-2 font-semibold text-gray-900 text-2xl'>Популярні інструменти</h4>
            <Image
               className='w-32 h-auto absolute right-20 bottom-3'
               src={tableIconsBoth}
               loader={imageLoader}
               alt='g-sheets vs excel'
               width={100}
               height={100}
               // objectFit='cover'
            ></Image>
         </div>

         <div className='flex flex-col gap-6 p-6 description w-3/5 font-medium text-pretty text-gray-500 text-lg/6'>
            <div ref={scrollReference} className='scroller w-full p-4 px-0 -ms-3 overflow-hidden'>
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
            <p>
               <strong className='text-gray-800'>На цьому сайті</strong> ви знайдете цікаві розробки, створені автором.
               Можливо, вони надихнуть вас на власні проекти або допоможуть удосконалити те, що ви вже використовуєте.
            </p>
            <p>Ви можете отримати консультації автора, чи замовити проект для реалізації своїх власних задач</p>
            <button
               className='rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base py-2 px-4 w-auto m-auto ms-0 mt-1 font-medium'
               onClick={() => {}}
            >
               Отримати консультацію <ArrowUpRightIcon className='-ms-1 size-6' />
            </button>
         </div>

         <div className='cards-group flex w-2/5 position-relative mt-20 -ms-5'>
            <div className='card w-1/2 h-44 rounded-xl shadow-gray-200/50 shadow-lg border border-gray-200 overflow-hidden -rotate-6'>
               <Image
                  alt='table'
                  src={Sheets}
                  loader={imageLoader}
                  width={100}
                  height={100}
                  // objectFit='cover'
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
                  // objectFit='cover'
                  className='w-full h-full'
               ></Image>
            </div>
         </div>
      </div>
   );
};

export default TablesContent;
