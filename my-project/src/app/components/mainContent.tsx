import TablesContent from './tablesContent';
import { TablesGrid } from './tablesGrid';
// import { UserCircleIcon, LightBulbIcon } from '@heroicons/react/20/solid';

const TableClasses: React.FC = () => {
   return (
      <div className='container m-auto flex flex-wrap p-12 py-6 gap-0'>
         <div className='p-6 border-b border-dotted w-full my-4'>
            <h3 className='my-2 font-semibold text-gray-900 text-2xl'>
               Категорії розробок.{' '}
               <span hidden={false} aria-hidden={false}>
                  Класифікація таблиць Google Sheets та Microsoft Excel
               </span>
            </h3>
         </div>

         <div className='p-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
            <p className='w-4/6'>
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
                     📈 <strong className='text-gray-800'>Розрахункові таблиці</strong> – з простими і складними
                     зв&apos;язками (багатосторінкові).
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
               {/* <UserCircleIcon className='size-10 m-2 rounded-full border inline border-transparent text-blue-600 shadow-md' /> */}
               {/* <LightBulbIcon className='size-12 p-2 m-2 rounded-full border inline border-transparent text-blue-400' /> */}
               <p className='py-4 text-lg inline-block'>
                  💡 Звичайно ж така класифікація досить умовна і є особистою думкою автора.
               </p>
            </div>

            <p className='py-4 text-lg font-semibold text-pretty text-gray-900 sm:text-xl/8 my-4'>
               Електронна таблиця як база даних?
            </p>

            <p className='text-lg w-4/6'>
               📌 Хоча справжня база даних має складнішу архітектуру, деякі таблиці виконують аналогічні функції. Саме
               тому в рамках цього сайту можна зустріти термін <q className='font-semibold text-gray-800'>БАЗА ДАНИХ</q>, навіть якщо це дещо спрощене визначення.
            </p>
         </div>
      </div>
   );
};

const Content = () => {
   return (
      <div className='my-32'>
         <div className='text-center mb-64'>
            <h2 className='text-4xl font-semibold tracking-tight text-balance text-gray-900'>
               Як використовувати електронні таблиці?
            </h2>
            <p className='m-auto mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 w-1/2'>
               Цей сайт присвячено темі розробки корисних і ефективних методів/можливостей використання електронних
               таблиць у різних сферах діяльності
            </p>
         </div>
         <TablesContent />
         <TableClasses />
         <TablesGrid />
      </div>
   );
};

export { Content };
