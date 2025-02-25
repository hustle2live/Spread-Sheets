'use client';
import React, { useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { BaseUrl } from './common/constants';
import path from 'path';

import PdfViewer from '@/components/pdfViewer';
// const PdfViewer = dynamic(() => import('@/components/pdfViewer'), {
//    ssr: false
// });

type ShowProps = {
   heading: string;
   text: string;
   fileUrl: string;
};



const filePath = (addPath: string) => path.join(process.cwd(), addPath);

const ShowTable: React.FC<ShowProps> = (props: ShowProps) => {
   console.log('show-table');
   return (
      <div className='shadow-md bg-white rounded-md border border-neutral-200 transition-all hover:border-gray-400 text-start'>
         <div className='card-view h-60 relative overflow-hidden'>
            <PdfViewer url={props.fileUrl} />
         </div>
         <hr className='w-full' />
         <div className='p-6'>
            <p className='my-2 text-gray-900 text-xl font-semibold '>{props.heading}</p>
            <p className='text-sm text-gray-700 font-thin'>{props.text}</p>
         </div>
      </div>
   );
};

const TablesGrid: React.FC = () => {
   const PdfView1 = `${BaseUrl}/pdf/Salary-1.pdf`;
   const PdfView2 = `${BaseUrl}/pdf/Salary-2.pdf`;
   const PdfView3 = `${BaseUrl}/pdf/Time-table.pdf`;
   const PdfView4 = `${BaseUrl}/pdf/TTN-form.pdf`;
   const PdfView5 = `${BaseUrl}/pdf/TTN-journal.pdf`;

   const data = [
      {
         fileUrl: filePath(PdfView1),
         heading: 'Інформаційна таблиця',
         text: 'Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною багатосторінкового табличного файлу та виконувати певні функції у такому файлі.'
      },
      {
         fileUrl: filePath(PdfView2),
         heading: 'Розрахункова таблиця',
         text: 'Така таблиця призначена для проведення певних розрахунків, з використанням простих і складних формул, що включають функції та зв&apos;язки між окремими сторінками файлу. В даному прикладі інформаційна таблиця, приведена тут, може бути частиною файлу, який об&apos;єднає їх в один файл і дозволить автоматизувати внесення початкових даних із першої у другу.'
      },
      {
         fileUrl: filePath(PdfView3),
         heading: '',
         text: ' Приведена тут табличка є зручним інструментом як документ, виконуючи при цьому розрахункову функцію підрахунку робочого часу. Будучи інтегрованою у систему таблиць розрахунку зарплати, здатна автоматично заповнювати відповідну колонку. Вона також &quot;вміє&quot; визначати робочі та вихідні дні за датою її використання.'
      },
      {
         fileUrl: filePath(PdfView4),
         heading: 'Заповнення вихідних документів з веденням журналу. Форма докумнта.',
         text: 'Часто виникає потреба виписувати якісь паперові документи, а заодно і вести журнал їх виписки. Це можуть бути довіреності, шляхові листки, фінансові звіти підзвітних осіб, ТТН-ки, і т.і. Цю нескладну, але копітку задачу можна полегшити за допомогою двох табличок-сторінок, одна з яких буде містити саму форму, а інша - міститиме журнал таких відповідних документів.'
      },
      {
         fileUrl: filePath(PdfView5),
         heading: 'Журнал документів',
         text: 'До журналу інформацію потрібно вносити вручну, а дані до бланку будуть заноситися автоматично, натисканням на кнопку. Можна, звичайно і вносити зміни у форму документа, а тоді за кнопкою вносити дані документа у журнал. Поєднання цих двох функцій дає найкращий результат.'
      }
   ];

   // console.log('render');

   return (
      <div id='content' className='bg-transparent flex flex-col items-center text-center'>
         <h2>Приклади таблиць</h2>
         <div className='container mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-16 md:px-24'>
            {data.map((item, idx) => {
               return (
                  <div key={item.heading + idx}>
                     <ShowTable fileUrl={item.fileUrl} text={item.text} heading={item.heading} />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export { TablesGrid };



