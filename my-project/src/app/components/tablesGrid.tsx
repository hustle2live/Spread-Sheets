'use client';

import dynamic from 'next/dynamic';

const TablesGrid: React.FC = () => {
   const PdfViewer = dynamic(() => import('@/components/pdfViewer'), { ssr: false });

   return (
      <div id='content' className='bg-transparent py-24 flex flex-col items-center text-center'>

         <div className='container mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='rounded-xl border border-neutral-200 transition-all hover:border-gray-400 text-start'>
               <div className='card-view h-56 relative overflow-scroll'>
                  <PdfViewer url='/pdf/Salary-1.pdf' />
               </div>
               <hr className='w-full' />
               <div className='p-6'>
                  <p className='my-2 text-gray-900 text-xl font-semibold '>Інформаційна таблиця</p>
                  <p className='text-sm text-gray-700 font-thin'>
                     Таблиця, приведена вище, є прикладом інформаціної таблиці. Вона призначена лише для зберігання
                     інформації та пошуку певних даних у ній. Тим не менше, вона може бути частиною багатосторінкового
                     табличного файлу та виконувати певні функції у такому файлі.
                  </p>
               </div>
            </div>

            <div className='rounded-xl border border-neutral-200 transition-all hover:border-gray-400 text-start'>
               <div className='card-view h-56 relative overflow-scroll'>
                  <PdfViewer url='/pdf/Salary-2.pdf' />
               </div>
               <hr className='w-full' />
               <div className='p-6'>
                  <p className='my-2 text-gray-900 text-xl font-semibold '>Розрахункова таблиця</p>
                  <p className='text-sm text-gray-700 font-thin'>
                     Така таблиця призначена для проведення певних розрахунків, з використанням простих і складних
                     формул, що включають функції та зв&apos;язки між окремими сторінками файлу. В даному прикладі
                     інформаційна таблиця, приведена тут, може бути частиною файлу, який об&apos;єднає їх в один файл і
                     дозволить автоматизувати внесення початкових даних із першої у другу.
                  </p>
               </div>
            </div>

            <div className='rounded-xl border border-neutral-200 transition-all hover:border-gray-400 text-start'>
               <div className='card-view h-56 relative overflow-scroll'>
                  <PdfViewer url='/pdf/Time-table.pdf' />
               </div>
               <hr className='w-full' />
               <div className='p-6'>
                  <p className='my-2 text-gray-900 text-xl font-semibold '></p>
                  <p className='text-sm text-gray-700 font-thin'>
                     Приведена тут табличка є зручним інструментом як документ, виконуючи при цьому розрахункову функцію
                     підрахунку робочого часу. Будучи інтегрованою у систему таблиць розрахунку зарплати, здатна
                     автоматично заповнювати відповідну колонку. Вона також &quot;вміє&quot; визначати робочі та вихідні
                     дні за датою її використання.
                  </p>
               </div>
            </div>

            <div className='rounded-xl border border-neutral-200 transition-all hover:border-gray-400 text-start'>
               <div className='card-view h-56 relative overflow-scroll'>
                  <PdfViewer url='/pdf/TTN-form.pdf' />
               </div>
               <hr className='w-full' />
               <div className='p-6'>
                  <p className='my-2 text-gray-900 text-xl font-semibold '>
                     Заповнення вихідних документів з веденням журналу. Форма докумнта.
                  </p>
                  <p className='text-sm text-gray-700 font-thin'>
                     Часто виникає потреба виписувати якісь паперові документи, а заодно і вести журнал їх виписки. Це
                     можуть бути довіреності, шляхові листки, фінансові звіти підзвітних осіб, ТТН-ки, і т.і. Цю
                     нескладну, але копітку задачу можна полегшити за допомогою двох табличок-сторінок, одна з яких буде
                     містити саму форму, а інша - міститиме журнал таких відповідних документів.
                  </p>
               </div>
            </div>
            <div className='rounded-xl border border-neutral-200 transition-all hover:border-gray-400 text-start'>
               <div className='card-view h-56 relative overflow-scroll'>
                  <PdfViewer url='/pdf/TTN-journal.pdf' />
               </div>
               <hr className='w-full' />
               <div className='p-6'>
                  <p className='my-2 text-gray-900 text-xl font-semibold '>Журнал документів</p>
                  <p className='text-sm text-gray-700 font-thin'>
                     До журналу інформацію потрібно вносити вручну, а дані до бланку будуть заноситися автоматично,
                     натисканням на кнопку. Можна, звичайно і вносити зміни у форму документа, а тоді за кнопкою вносити
                     дані документа у журнал. Поєднання цих двох функцій дає найкращий результат.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export { TablesGrid };
