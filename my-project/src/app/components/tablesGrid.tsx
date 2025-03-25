'use client';
import React from 'react';
import PdfViewer from '@/app/components/features/pdfViewer';
import { PageDir, PDFsDirPath } from '@/components/common/constants';

type ShowProps = {
   heading: string;
   text: string;
   fileUrl: string;
};

const pdfPath = PDFsDirPath[PageDir.HOMEPAGE];

const tablesData: ShowProps[] = [
   {
      fileUrl: pdfPath[0],
      heading: 'Інформаційна таблиця',
      text: 'Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для зберігання інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною багатосторінкового табличного файлу та виконувати певні функції у такому файлі.'
   },
   {
      fileUrl: pdfPath[1],
      heading: 'Розрахункова таблиця',
      text: "Така таблиця призначена для проведення певних розрахунків, з використанням простих і складних формул, що включають функції та зв'язки між окремими сторінками файлу. В даному прикладі інформаційна таблиця, приведена тут, може бути частиною файлу, який об{`'`}єднає їх в один файл і дозволить автоматизувати внесення початкових даних із першої у другу."
   },
   {
      fileUrl: pdfPath[2],
      heading: '',
      text: 'Приведена тут табличка є зручним інструментом як документ, виконуючи при цьому розрахункову функцію підрахунку робочого часу. Будучи інтегрованою у систему таблиць розрахунку зарплати, здатна автоматично заповнювати відповідну колонку. Вона також &quot;вміє&quot; визначати робочі та вихідні дні за датою її використання.'
   },
   {
      fileUrl: pdfPath[3],
      heading: 'Заповнення вихідних документів з веденням журналу. Форма докумнта.',
      text: 'Часто виникає потреба виписувати якісь паперові документи, а заодно і вести журнал їх виписки. Це можуть бути довіреності, шляхові листки, фінансові звіти підзвітних осіб, ТТН-ки, і т.і. Цю нескладну, але копітку задачу можна полегшити за допомогою двох табличок-сторінок, одна з яких буде містити саму форму, а інша - міститиме журнал таких відповідних документів.'
   },
   {
      fileUrl: pdfPath[4],
      heading: 'Журнал документів',
      text: 'До журналу інформацію потрібно вносити вручну, а дані до бланку будуть заноситися автоматично, натисканням на кнопку. Можна, звичайно і вносити зміни у форму документа, а тоді за кнопкою вносити дані документа у журнал. Поєднання цих двох функцій дає найкращий результат.'
   }
];

const TablesGrid: React.FC = () => {
   return (
      <div
         id='content'
         className='home__tables-grid container m-auto bg-transparent flex flex-col items-center p-4 lg:p-6 pb-20 mt-20 sm:p-6 md:px-12'
      >
         <h2 className='my-4 font-semibold text-gray-900 text-2xl text-center sm:text-start'>Приклади таблиць</h2>
         <div className='container home__tables-grid-list mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-16 lg:px-24 z-0 pb-12 relative'>
            {tablesData.map((item, idx) => {
               return (
                  <div
                     key={item.heading + idx}
                     className='shadow-md bg-white rounded-md border border-neutral-200 transition-all hover:border-gray-400 text-start'
                  >
                     <div className='card-view h-60 relative overflow-hidden'>
                        <PdfViewer url={item.fileUrl} />
                     </div>
                     <hr className='w-full' />
                     <div className='p-6'>
                        <p className='my-2 text-gray-900 text-xl font-semibold '>{item.heading}</p>
                        <p className='text-sm text-gray-700'>{item.text}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export { TablesGrid };
