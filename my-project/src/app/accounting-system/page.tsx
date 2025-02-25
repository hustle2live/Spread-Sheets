'use client';

import HTMLParser from 'html-react-parser';

import { PageDir, PDFsDirPath } from '@/components/common/constants';
import { PdfDynamicViewer as PdfViewer } from '@/components/pdfViewer';

type DadaType = {
   header: string;
   text: string;
}[];

const data: DadaType = [
   {
      header: 'Загальний вигляд файлу.',
      text: "Далі я покажу просту облікову систему, яка здатна замінити повноцінну облікову систему, коли у користувача немає потреби вести великий об'єм облікових операцій і немає бажання витрачати кошти на обслуговування систем, типу 1С. Ця система таблиць може зацікавити лише тих користувачів, які обізнані з основами бухгалтерського обліку. <br />Ця система є прикладом багатосторінкових файлів і може використвуватися одним, або кількома користувачами. Загальний вигляд такого файлу ви бачите на слайді поруч. <br />На першому листі ви бачите список (базу даних) бухгалтерських операцій, до якої вносяться дані через списки, чи готові шаблони. Далі, завдяки автоматичній обробці цих даних отримуємо основні бухгалтерські звіти: оборотно-сальдові відомості, аналіз рахунків і т.і. за потреби."
   },
   {
      header: 'Загальна оборотно-сальдова відомість.',
      text: 'Така відомість формується автоматично, в режимі реального часу. Її зміст залежить лише від пероду, за який вона створюється. Будь-які зміни у базі даних проведень також спричинять автоматичні зміни у звіті. <br />Викладене вище стосується також всіх інших звітів про які мова йтиме далі.'
   },
   {
      header: 'Оборотно-сальдова відомість по рахунку.',
      text: 'Ця відомість формується в залежності від номера бухгалтерсьокого рахунку та періоду дат. формування відбувається в атоматичному режимі у реальному часі.'
   },
   {
      header: 'Аналіз рахунку.',
      text: 'Цей простий аналіз рахунку формується залежно від номера рахунку та періоду дат.'
   },
   {
      header: 'Аналіз рахунку розширений.',
      text: 'Таку, або ще якусь подібну форму аналізу рахунку можна використовувати за Вашими власними звичками та вподобаннями.'
   },
   {
      header: 'Вибірка даних за довільними параметрами.',
      text: 'На слайді поруч ви можете бачити інтерфейс для створення звіту за будь-якими можливими параметрами та їх комбінаціями. Такий звіт буває корисним для отримання даних за специфічними запитами.'
   }
];

const AccountingSystem: React.FC = () => {
   const pdfPath = PDFsDirPath[PageDir.ACCOUNTING_SYSTEM];

   return (
      <div className='pb-32 bg-body-primary'>
         <div className='py-32'>
            <h2 className='w-full md:w-2/3 xl:w-1/2 m-auto text-4xl/normal text-center font-semibold text-balance leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600'>
               Бухгалтерська Облікова Система
            </h2>
            {/* <p className='text-center m-auto mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 w-1/2'></p> */}
         </div>
         <div className='bg-transparent flex flex-col items-center text-center pb-16'>
            <div className='container grid grid-cols-1 gap-4 md:gap-16 md:px-24'>
               {data.map(({ header, text }, idx) => {
                  return (
                     <div
                        key={`key_${idx}_${header}`}
                        className='h-auto px-6 lg:px-0 lg:h-96 flex flex-col lg:flex-row gap-3 rounded-md text-start'
                     >
                        <div className='w-full h-80 lg:h-auto lg:w-1/2 card-view relative overflow-hidden shadow-md bg-white'>
                           <PdfViewer url={pdfPath[idx] ?? ''} />
                        </div>
                        <div className='w-full px-2 py-4 mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                           <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(header)}</p>
                           <p className='text-sm text-gray-700 font-thin'>{HTMLParser(text)}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
            <hr className='my-4' />
            <ul>
               <p>
                  Створивши такий набір таблиць та налагодивши їх зв'язки, Ви отримуєте можливість побудувати зручну і
                  зрозумілу для себе систему обліку. Для повного розуміння можливості користування такою системою я
                  зауважу декілька важливих моментів із своєї практики:
               </p>
               <li>
                  якщо маєте великий об'єм номенклатури (товарів, МШП і т.і.) то його доцільно вести окремо, а у дану
                  систему вводити лише синтетичні дані;
               </li>
               <li>також аналітичні дані по зарплаті радив би вести окремо;</li>
               <li>
                  таку високу чутливість і простоту формування звітів мені вдалося досягти завдяки широкому використанню
                  функціі =QUERY(), яка доступна у Google Sheets. Раніше, працюючи з Excel, для формування звітів я
                  використовував макроси (VBA) у комбінації з функцією =DSUM(). Документацію та відеоматеріали з
                  використання функціі =QUERY() ви легко знайдете на просторах інтернету.
               </li>
            </ul>
         </div>
      </div>
   );
};

export default AccountingSystem;
