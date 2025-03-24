'use client';

import HTMLParser from 'html-react-parser';
import { PageDir, PDFsDirPath } from '@/components/common/constants';

import PdfViewer from '@/app/components/features/pdfViewer';

type DadaType = {
   header: string;
   text: string;
}[];

const data: DadaType = [
   {
      header: 'Формування текстових документів засобами електронних таблиць',
      text: "Часто виникає потреба у формуванні великих за об'ємом текстових документів. Переважна більшість користувачів послуговуються для цього WORD-ом чи Гугл Документом. І це правильно, якщо маєте справу з нечастим заповненням таких документів. Тут я спробую показати як можна зекономити робочий час, використовуючи для цього функції та властивості електронних таблиць, коли заповнення таких документів носить масовий характер."
   },
   {
      header: '',
      text: 'На слайді поруч, ви бачите форму контракту (скорочено). Як правило, змін потребують перша і остання сторінка такого контракту. Відтак необхідно створити довідники реквізитів контрагентів, що укладають між собою такі контракти. Списки замовників та виконавців ви бачите на наступних двох слайдах. <br /> Далі, корисно створити перехресну табличку, яка буде містити номери та дати контрактів між нашими контрагентами. Це потрібно для того, щоб ви, вибравши одного та іншого, у самій нижній таблиці дали можливість Вашій системі (таблиць) вибрати номер та дату контракту між ними.'
   },
   {
      header: '',
      text: "Приблизно так працює і заповнення останньої сторінки. Як ви вже напевно здогадалися, усі ці підстановки реалізуються через функції =VLOOUP(). А об'єднання текстових елементів - знаком '&', або функцією =CONCATENATE(). Для зручності об'єднання текстових елементів, можна розбити текст на зручні за об'ємом фрагменти. Щоб не плутатись, я рекомендую завести по одному листу у Вашому файлі для отих усіх даних, що приведені у слайдах. Також я, зазвичай використвую ще один лист, на якому вибираються дані по контрагентам договору. Так простіше потім об'єднувати їх у текст."
   },
   {
      header: '',
      text: "Ну і нарешті ця маленька табличка задля того, що б Ви обрали тих двох учасників, що укладають контракт. Користувачу достатньо зробити вибір індексу у клітинках пофарбованих зеленим із спадаючого списку і контракт відповідно заповниться з додатків наведених вище. Для зручності у жовтих клітинках, після вибору певного індексу з'являються назви учасників договору."
   }
];

const DocumentFormation: React.FC = () => {
   const pdfPath = PDFsDirPath[PageDir.DOCUMENT_FORMATION];

   return (
      <div className='pb-32 bg-body-primary'>
         <div className='py-24 pb-16 sm:py-32 px-2'>
            <h2 className='w-full md:w-2/3 xl:w-1/2 m-auto text-3xl sm:text-4xl/normal text-center font-semibold text-balance tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600'>
               Формування текстових документів засобами електронних таблиць
            </h2>
         </div>
         <div className='bg-transparent flex flex-col items-center text-center pb-16'>
            <div className='container grid grid-cols-1 gap-4 md:gap-16 md:px-24'>
               {data.map(({ header, text }, idx) => {
                  return (
                     <div
                        key={`key_${idx}_${header}`}
                        className='h-auto px-2 lg:px-0 lg:h-96 flex flex-col lg:flex-row gap-3 rounded-md text-start'
                     >
                        <div className='w-full h-80 lg:h-auto lg:w-1/2 card-view relative overflow-hidden shadow-md bg-white'>
                           <PdfViewer url={pdfPath[idx] ?? ''} />
                        </div>
                        <div className='w-full py-4 mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                           <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(header)}</p>
                           <p className='text-sm text-gray-700 font-thin'>{HTMLParser(text)}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default DocumentFormation;
