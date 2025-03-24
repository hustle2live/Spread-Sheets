'use client';

import { Instruments } from './Instruments';
import { TablesGrid } from './tablesGrid';

const TableClasses: React.FC = () => {
   return (
      <div className='container m-auto flex flex-wrap gap-0 mt-20 p-0 sm:p-6 md:px-12'>
         <div className='p-6 border-b border-dotted w-full mb-4'>
            <h3 className='my-2 font-semibold text-gray-900 text-2xl text-center sm:text-start'>
               Категорії розробок.{' '}
               <span hidden={false} aria-hidden={false}>
                  Класифікація таблиць Google Sheets та Microsoft Excel
               </span>
            </h3>
         </div>

         <div className='p-6 px-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
            <p className='md:w-4/6'>
               Маючи багаторічний досвід побудови різних за складністю задач можу класифікувати свої розробки таким
               чином:
            </p>

            <ul className='flex flex-col my-2 gap-4 p-6 pl-0 text-lg/5'>
               <li>
                  <p>
                     📊 <strong className='text-gray-800'>Інформаційні таблиці</strong> – зручний спосіб зберігати та
                     обробляти дані.
                  </p>
               </li>
               <li>
                  <p>
                     📈 <strong className='text-gray-800'>Розрахункові таблиці</strong> – з простими і складними зв{`'`}
                     язками (багатосторінкові).
                  </p>
               </li>
               <li>
                  <p>
                     📝 <strong className='text-gray-800'>Таблиці для заповнення та друку</strong> документів на основі
                     журналу – автоматизація рутинної роботи.
                  </p>
               </li>
               <li>
                  <p>
                     👥 <strong className='text-gray-800'>Таблиці з доступом для декількох користувачів</strong> –
                     зручна робота в команді.
                  </p>
               </li>
               <li>
                  <p>
                     ☁️ <strong className='text-gray-800'>Системи, що поєднують кілька таблиць через хмару</strong> –
                     оптимізація процесів.
                  </p>
               </li>
            </ul>

            <div>
               <p className='py-4 text-lg inline-block'>
                  💡 Звичайно ж така класифікація досить умовна і є особистою думкою автора.
               </p>
            </div>
         </div>
      </div>
   );
};

const Content: React.FC = () => {
   return (
      <div className='home__content'>
         <div className='bg-body-primary pt-16 sm:pt-32 pb-1'>
            <h2 className='text-2xl sm:text-4xl text-center font-semibold tracking-tight text-balance text-gray-900'>
               Як використовувати електронні таблиці?
            </h2>
            <p className='pb-16 sm:pb-32 m-auto mt-4 px-2 sm:px-4 text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 md:w-3/4 lg:w-1/2'>
               Цей сайт присвячено темі розробки корисних і ефективних методів/можливостей використання електронних
               таблиць у різних сферах діяльності
            </p>
         </div>
         <Instruments />
         <TableClasses />
         <TablesGrid />
         <div className='w-full text-center sm:text-start px-4 sm:px-6 md:ps-12 lg:ps-44 py-12 pb-16 mb-32 bg-slate-100'>
            <div className='container m-auto'>
               <p className='my-4 font-semibold text-gray-900 text-2xl'>Електронна таблиця як база даних?</p>
               <p className='text-lg w-full md:w-4/6 text-start'>
                  📌 Хоча справжня база даних має складнішу архітектуру, деякі таблиці виконують аналогічні функції.
                  Саме тому в рамках цього сайту можна зустріти термін{' '}
                  <q className='font-semibold text-gray-800'>БАЗА ДАНИХ</q>, навіть якщо це дещо спрощене визначення.
               </p>
            </div>
         </div>
      </div>
   );
};

export { Content };
