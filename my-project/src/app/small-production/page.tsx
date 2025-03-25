'use client';

// import { PdfDynamicViewer as PdfViewer } from '@/app/components/features/pdfViewerDynamic';
import PdfViewer from '@/app/components/features/pdfViewer';

import HTMLParser from 'html-react-parser';

import { PageDir, PDFsDirPath } from '@/components/common/constants';

type DadaType = {
   header: string;
   text: string;
   doubled?: boolean;
}[];

const data: DadaType = [
   {
      header: 'Мале виробництво та склад',
      text: 'Предствлена тут система таблиць стане у пригоді мікропідприємствам, які виробляють нескладну продукцію або надають послуги з ремонту та обслуговування техніки. <br />На слайді поруч Ви можете бачити основу такої системи - базу даних операцій, що супроводжують, зазвичай, підприємницьку діяльність. <br />Як Ви могли бачити у попередніх моїх напрацюваннях саме ця база дозволяє обробляти інформацію та видавати звіти, що певним чином ілюструють таку діяльність.'
   },
   {
      header: 'Довідник',
      text: 'Для зручності  користування системою створюється довідник. Він слугує для однозначних назв елементів бази даних операцій і для організації спадаючих списків для вибору елементів. Цей довідник може бути довільної форми і включати також назви постачальників і покупців. Проте, у цьому випадку я розмістив їх на інших сторінках цього файлу і вони тут не показані.'
   },
   {
      header: 'Рух сировини і готової продукції',
      text: 'На слайді нижче, ви можете бачити два абсолютно автоматичні звіти, які демонструють рух відповідних матеріальних цінностей.  Автоматизація цих звітів полягає в тому, що дані в них виникають по мірі того, як вони вносяться до бази даних і демонструють стан справ на поточний момент, не потребуючи ніяких дій користувача.',
      doubled: true
   },
   {
      header: 'Звіти про розрахунки.',
      text: 'Наступпні два слайди демонструють два звіти про стан розрахунків з покупцями і постачальниками, без деталізації, з миттєвим відображенням стану розрахунків.  Ці звіти також формуються у режимі реального часу та не потребують ніякого втручання користвача.'
   },
   {
      header: 'Деталізовані звіти про розрахунки.',
      text: 'У слайдах нижче ви можете бачити звіти, відповідно по покупцях і постачальниках за продукцію і  товари, з деталізацією по номенклатурі та датах/номерах документів. Звіт змінється в залежності від змін у базі даних операцій та від вибору покупця чи постачальника з випадаючого списку. <br />Звичайно ж Ви можете дегко побудувати для себе ще більш деталізовані звіти, включаючи період дат, кількість та ціну МЦ та інше. Обмеженням може бути лише набір даних, що включає Ваша база даних. '
   },

   {
      header: 'Аналіз доходу і собівартості та маркетингова інформація.',
      text: "Приведений зліва слайд  - це також звіт, який показує прибутковість реалізованої продукції. Звіт спрощений, автоматичний і формується лише завдяки змінам у базі даних. Його також варто вдосконалити, включивши як мінімум, період. <br />Багатьом підприємцям з такої системи важливо було б отримати маркетингову інформацію, як наприклад: частоту замовлень клієнта, середній об'єм замовлень у розрізі клієнтів, що саме найчастіше замовляє клієнт і таке інше.  У даному випадку такий маркетинговий звіт не має сенсу з огляду на обеженість даних цієї бази, яка зформована лише для прикладу."
   }
];

const SmallProduction: React.FC = () => {
   const pdfPath = PDFsDirPath[PageDir.SMALL_PRODUCTION];
   let count = 2;

   return (
      <div className='pb-32 bg-body-primary'>
         <div className='py-24 pb-16 sm:py-32 px-2'>
            <h2 className='w-full md:w-2/3 xl:w-1/2 m-auto text-3xl sm:text-4xl/normal text-center font-semibold text-balance tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600'>
               Мале виробництво
            </h2>
            <p className='text-center m-auto mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 w-1/2'></p>
         </div>

         <div className='container mx-auto'>
            <div className='bg-transparent flex flex-col text-center pb-16'>
               <div className='w-full h-auto px-2 lg:px-0 lg:h-96 justify-center flex flex-col lg:flex-row gap-3 rounded-md text-start'>
                  <div className='w-full h-80 lg:h-auto lg:w-6/12 card-view relative overflow-hidden shadow-md bg-white'>
                     <PdfViewer url={pdfPath[0]} />
                  </div>
                  <div className='w-full py-4 mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                     <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(data[0].header)}</p>
                     <p className='text-sm text-gray-700'>{HTMLParser(data[0].text)}</p>
                  </div>
               </div>

               <br />
               <br />

               <div className='w-full h-auto px-2 lg:px-0 lg:h-96 justify-center flex flex-col lg:flex-row gap-3 rounded-md text-start'>
                  <div className='w-full h-80 lg:h-auto lg:w-6/12 card-view relative overflow-hidden shadow-md bg-white'>
                     <PdfViewer url={pdfPath[1]} />
                  </div>
                  <div className='w-full py-4 sm:mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                     <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(data[1].header)}</p>
                     <p className='text-sm text-gray-700'>{HTMLParser(data[1].text)}</p>
                  </div>
               </div>
            </div>

            <hr className='w-full my-4' />

            <h4 className='mt-8 mb-20 px-2 text-lg font-bold'>Звіти про рух матеріальних цінностей та грошей</h4>

            <div className='bg-transparent flex flex-col pb-16'>
               <div className='grid grid-cols-1 gap-4 md:gap-16 md:px-24'>
                  {data.slice(2, 6).map(({ header, text }, idx, arr) => {
                     const [prev, next] = [count, count + 1];
                     count += 2;
                     const isLastElement = idx === arr.length - 1 ? 'flex-wrap' : '';

                     return isLastElement ? (
                        <div key={`key_${idx}_${header}`} className='sm:px-6'>
                           <div className='px-2 h-auto flex flex-wrap sm:flex-nowrap m-auto justify-between gap-6 rounded-md'>
                              <div className='w-full sm:w-1/2 h-80 card-view relative overflow-hidden shadow-md bg-white'>
                                 <PdfViewer url={pdfPath[prev] ?? ''} />
                              </div>

                              <div className='w-full sm:w-1/2 mb-8 lg:py-0'>
                                 <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(header)}</p>
                                 <p className='text-sm text-gray-700'>{HTMLParser(text)}</p>
                              </div>
                           </div>
                        </div>
                     ) : (
                        <div key={`key_${idx}_${header}`} className='sm:px-6'>
                           <div className='w-full px-2 py-4 mb-8 lg:py-0'>
                              <p className='mb-2 text-gray-900 text-lg/6 font-semibold'>{HTMLParser(header)}</p>
                              <p className='text-sm text-gray-700'>{HTMLParser(text)}</p>
                           </div>

                           <div className='px-2 h-auto flex flex-wrap sm:flex-nowrap m-auto justify-between gap-6 rounded-md'>
                              <div className='w-full sm:w-1/2 h-80 card-view relative overflow-hidden shadow-md bg-white'>
                                 <PdfViewer url={pdfPath[prev] ?? ''} />
                              </div>
                              <div className='w-full sm:w-1/2 h-80 card-view relative overflow-hidden shadow-md bg-white'>
                                 <PdfViewer url={pdfPath[next] ?? ''} />
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SmallProduction;
