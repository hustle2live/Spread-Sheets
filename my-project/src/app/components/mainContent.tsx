import TablesContent from './tablesContent';
import { TablesGrid } from './tablesGrid';

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
         <TablesGrid />
      </div>
   );
};

export { Content };
