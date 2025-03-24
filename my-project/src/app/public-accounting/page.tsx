'use client';

// import { PdfDynamicViewer as PdfViewer } from '@/app/components/features/pdfViewerDynamic';
import PdfViewer from '@/app/components/features/pdfViewer';

import HTMLParser from 'html-react-parser';

import { PageDir, PDFsDirPath } from '@/components/common/constants';

type DadaType = {
   header: string;
   text: string;
}[];

const data: DadaType = [
   {
      header: 'Загальний вигляд',
      text: 'На початку створюємо список членів кооперативу, де вносяться всі необхідні дані. Але основними і критично необхідними з цих даних будуть номери гаражних боксів та призвища членів кооперативу. Звичайно ж потрібно буде зформувати списки, з яких будуть формуватися довідкові дані, такі як банки, позначки внесків. '
   },
   {
      header: '',
      text: 'Таку форму має табличка для внесення даних про членські внески.'
   },
   {
      header: '',
      text: 'У такій формі можна зручно фіксувати витрати електроенергії по членах клубу, які мають індивідуальні лічильники електроенергії.'
   },
   {
      header: '',
      text: "А й цій формі можна проводити нарахування по витратах, пов'язаних з послугами сторонніх організаціях."
   },
   {
      header: 'Дані по касі і банківських рахунках.',
      text: "До цієї таблички слід вносити дані про рух грошових коштів по касі та банківських рахунках. <br />Поле <q>Тип опер.</q> - це умовне позначення яке допомагає системі при формуванні звітів. Поля <q>Рах. №</q> та <q>Дата</q> призначені для реєстрації вхідних рахунків від сторонніх організацій і не є обов'язковими, а лише інформаційними."
   },
   {
      header: 'Звіт про стан сплати членських внесків.',
      text: 'Цей звіт надає інформацію про стан сплати членських внесків у розрізі членів кооперативу. Він є статичним, тобто список членів не змінюється, або змінюється дуже незначно. <br />Звіт формується автоматично і підсвічує борги для кращого візуального сприйняття. '
   },
   {
      header: 'Звіт про розрахунки за електроенергію.',
      text: 'Цей звіт надає інформацію про стан розрахунків членів кооперативу за спожиту електроенергію. У багатьох організаціях такого типу її члени вносять додаткові внески за індивідуально використану електроенергію, а розрахунки за все споживання несе сама організація, як юридична особа. Звіт є динамічним, але залежить лише від кількості записів у базі даних.'
   },
   {
      header: 'Звіт про стан розрахунків з індивідуальним членом організації.',
      text: 'Такий звіт є динамічним і показує стан розрахунків з індивідуальним членом кооперативу за всіма видами внесків. Звіт формується на основі двох пераметрів: № бокса та періоду. Значок "%" у полі періоду означає "довільний", тобто за весь період ведення бази даних. Період може бути вказаний конкретно - місяць, квартал.'
   },
   {
      header: 'Звіт по касі і банку',
      text: 'Цей звіт відображає рух коштів та їх залишки у касі та на банківських рахунках організації. Звіт є динамічним та залежить від трьох параметрів: періоду дат та каси або банківського рахунку.'
   },
   {
      header: 'Звіт про розрахунки з іншими організаціями.',
      text: 'Цей звіт дає інформацію про стан розрахунків організації в цілому з сторонніми організаціями. Він призначений для контролю заборгованості та планування видатків організації на найближчу перспективу. Його дані залежать від періоду дат. Проте звіт може подовжитися за умови виникнення розрахунків з новими контрагентами.'
   },
   {
      header: 'Звіт про витрати організації.',
      text: 'Даний звіт ілюструє напрямки витрат коштів організації. Така інформація зазвичай потрібна при проведенні загальних зборів та може бути основою для роботи ревізійної комісії організації. <br />Звіт є динамічним і його дані залежать від періоду формування. <br />Оскільки від громадських організацій нині вимагають складання балансу та звіту про фінансові результати, то зовсім нескладно скласти його на основі бази даних такого типу додавши до такої системи таблиць ще й готову вихідну форму.'
   }
];

const PublicAccounting: React.FC = () => {
   const pdfPath = PDFsDirPath[PageDir.PUBLIC_ACCOUNTING];

   return (
      <div className='pb-32 bg-body-primary'>
         <div className='py-32'>
            <h2 className='w-full md:w-2/3 xl:w-1/2 m-auto text-4xl/normal text-center font-semibold text-balance leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600'>
               Облік Громадських Організацій
            </h2>
            <p className='text-center m-auto mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 w-1/2'>
               У даному розділі я покажу як побудувати систему для обліку даних громадської організації (на прикладі
               гаражного кооперативу). Це особливо актуально на фоні росту громадських формувань, клубів та інших об
               {`'`}єднань громадян. В таких організаціях на перший план виходить облік членських внесків та інших
               нарахувань, облік розрахунків із сторонніми організаціями розрахунків по податках та регламентована
               звітність.{' '}
            </p>
         </div>

         <div className='container mx-auto'>
            <div className='bg-transparent flex flex-col items-center text-center pb-16'>
               <div className='container grid grid-cols-1 gap-4 md:gap-16 md:px-24'>
                  <div className='h-auto px-6 lg:px-0 lg:h-96 flex flex-col lg:flex-row gap-3 rounded-md text-start'>
                     <div className='w-full h-80 lg:h-auto lg:w-1/2 card-view relative overflow-hidden shadow-md bg-white'>
                        <PdfViewer url={pdfPath[0]} />
                     </div>
                     <div className='w-full px-2 py-4 mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                        <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(data[0].header)}</p>
                        <p className='text-sm text-gray-700 font-thin'>{HTMLParser(data[0].text)}</p>
                     </div>
                  </div>
               </div>
            </div>

            <hr className='w-full my-4' />

            <div className='content m-auto my-12 '>
               <p className='mb-2'>Наступні три таблички присвячені нарахуванням:</p>
               <ul className='text-center list-disc inline-flex gap-8 ps-4 flex-wrap'>
                  <li className='list-disc'>нарахування членських внесків;</li>

                  <li className='list-disc'>нарахування внесків за електроенергію;</li>

                  <li className='list-disc'>нарахування по інших організаціях;</li>
               </ul>
            </div>

            <div className='bg-transparent flex flex-col items-center text-center pb-16'>
               <div className='container grid grid-cols-3 gap-4 md:gap-16 md:px-24'>
                  {data.slice(1, 4).map(({ header, text }, idx) => {
                     return (
                        <div key={`key_${idx}_${header}`} className='h-auto px-6 flex-col gap-3 rounded-md text-start'>
                           <div className='w-full h-80 card-view relative overflow-hidden shadow-md bg-white'>
                              <PdfViewer url={pdfPath[idx + 1]} />
                           </div>
                           <div className='w-full px-2 py-4 mb-8 lg:px-6 lg:py-0'>
                              <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(header)}</p>
                              <p className='text-sm text-gray-700 font-thin'>{HTMLParser(text)}</p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            <hr className='w-full my-4' />

            <div className='bg-transparent flex flex-col items-center text-center pb-16'>
               <div className='container grid grid-cols-1 gap-4 md:gap-16 md:px-24'>
                  {data.slice(4).map(({ header, text }, idx) => {
                     return (
                        <div
                           key={`key_${idx}_${header}`}
                           className='h-auto px-6 lg:px-0 lg:h-96 flex flex-col lg:flex-row gap-3 rounded-md text-start'
                        >
                           <div className='w-full h-80 lg:h-auto lg:w-1/2 card-view relative overflow-hidden shadow-md bg-white'>
                              <PdfViewer url={pdfPath[idx + 4]} />
                           </div>
                           <div className='w-full px-2 py-4 mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                              <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(header)}</p>
                              <p className='text-sm text-gray-700 font-thin'>{HTMLParser(text)}</p>
                           </div>
                        </div>
                     );
                  })}
               </div>

               <hr className='w-full my-16 mt-20' />

               <ul className='text-start w-4/5 gap-4 flex flex-col'>
                  <p className='text-lg'>
                     Створивши такий набір таблиць та налагодивши їх зв{`'`}язки, Ви отримуєте можливість побудувати
                     зручну і зрозумілу для себе систему обліку.
                  </p>
                  <p>
                     Для повного розуміння можливості користування такою системою я зауважу декілька важливих моментів
                     із своєї практики:
                  </p>
                  <li>
                     - якщо маєте великий об{`'`}єм номенклатури (товарів, МШП і т.і.) то його доцільно вести окремо, а у
                     дану систему вводити лише синтетичні дані;
                  </li>
                  <li>- також аналітичні дані по зарплаті радив би вести окремо;</li>
                  <li>
                     - таку високу чутливість і простоту формування звітів мені вдалося досягти завдяки широкому
                     використанню функціі =QUERY(), яка доступна у Google Sheets. Раніше, працюючи з Excel, для
                     формування звітів я використовував макроси (VBA) у комбінації з функцією =DSUM(). Документацію та
                     відеоматеріали з використання функціі =QUERY() ви легко знайдете на просторах інтернету.
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default PublicAccounting;
