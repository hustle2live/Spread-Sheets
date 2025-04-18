'use client';

import PdfViewer from '@/app/components/features/pdfViewer';


import HTMLParser from 'html-react-parser';

import { PageDir, PDFsDirPath } from '@/components/common/constants';

type DadaType = {
   header: string;
   text: string;
}[];

const data: DadaType = [
   {
      header: 'База даних.',
      text: 'Як і в інших прикладах, на початку необхідно створити базу даних операцій. Кількість та склад полів бази має забезпечувати можливість побудови необхідних Вам звітів. <br />У даному випадку база даних забезпечує облік операцій руху грошових коштів групи афілійованих підприємств і приватних підприємців. Тому у приведеній базі даних є контрагенти, що належать групі (внутрішні контрагенти) і такі, що не належать до групи (зовнішні контрагенти) '
   },
   {
      header: 'Шаблони операцій.',
      text: "Для зручності введення нових даних буває доцільно створити шаблони операцій. Це зменшує імовірність помилок і полегшує роботу операторів, оскільки потребує введення меншого об'єму даних. Оператор змінює лише клітинки бірюзового кольору. <br />Використання шаблонів означає первинне внесення даних у спеціальну зону, а потім атоматично, або через копі/паст вноситься до бази. <br />У даному разі, після редагування, оператор переводить курсор на клітинку з цифрою, що відображає кількість рядків у даному шаблоні (колонка J) та  натискає кнопку <q>Перенести дані шаблону у базу даних</q>. Спеціальний коротенький макрос автоматично переносить дані у базу."
   },
   {
      header: 'Рух коштів по компанії групи.',
      text: 'Цей звіт відображає рух коштів по певному контрагенту члену групи. Цей звіт динамічний та відображає рух коштів по надходженню і видаткам коштів у розрізі контрагентів, валют, напрямків витрат і джерел надходження за довільний період.'
   },
   {
      header: 'Обороти між контрагентами.',
      text: 'Цей динамічний звіт дає можливість отримати дані про переведення коштів між контрагентами як всередині групи так і за її межі за Вашим вибором, за довільний проміжок часу.'
   },
   {
      header: 'Звіт по підзвітних особах.',
      text: 'Цей динамічний звіт демонструє стан використання коштів групи компаній підзвітними особами.'
   },

   {
      header: 'Звіт про рух грошових коштів по групі.',
      text: 'Цей звіт можна віднести до групи статичних, оскільки роширюватися він може тільки у процесі зростання кількості одиниць у складі групи. Він призначений для ілюстрації руху коштів та контролю їх залишків, як в цілому по групі, так і по її окремих бізнес-одиницях.'
   },
   {
      header: 'Звіт про витрати підприємств групи.',
      text: 'Цей статичний звіт разом з діаграмою демонструє витрати групи у розрізі статей за обраний період. <br />По аналогії з цим звітом легко побудувати також звіти і діаграми, наприклад росту продажів, порівняльний аналіз точок продажу і подібні їм та створити дашборди для топ-менеджерів, керівників підрозділів та власників бізнесу.'
   }
];

const GroupCashFlow: React.FC = () => {
   const pdfPath = PDFsDirPath[PageDir.GROUP_CASH_FLOW];

   return (
      <div className='pb-32 bg-body-primary'>
         <div className='py-24 pb-16 sm:py-32 px-2'>
            <h2 className='w-full md:w-2/3 xl:w-1/2 m-auto text-3xl sm:text-4xl/normal text-center font-semibold text-balance tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600'>
               Облік руху грошових коштів групи
            </h2>
            <p className='text-center m-auto mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 w-1/2'></p>
         </div>

         <div className='container mx-auto'>
            <div className='bg-transparent flex flex-col text-center lg:pb-10'>
               {data.map(({ header, text }, idx) => {
                  return (
                     <>
                        <div
                           key={header + idx}
                           className='w-full h-auto px-2 lg:px-0 lg:h-96 justify-center flex flex-col lg:flex-row gap-3 rounded-md text-start mb-10'
                        >
                           <div className='w-full h-80 lg:h-auto lg:w-6/12 card-view relative overflow-hidden shadow-md bg-white'>
                              <PdfViewer url={pdfPath[idx]} />
                           </div>
                           <div className='w-full py-4 mb-8 lg:w-5/12 lg:px-6 lg:py-0'>
                              <p className='mb-2 text-gray-900 text-lg/6 font-semibold '>{HTMLParser(header)}</p>
                              <p className='text-sm text-gray-700'>{HTMLParser(text)}</p>
                           </div>
                        </div>
                        {idx === 1 && (
                           <div className='my-16'>
                              <hr className='w-full' />
                              <h4 className='px-2 mt-10 text-start text-xl font-semibold lg:ps-14'>
                                 Звіти по суб{`'`}єктам підприємництва, що входять до складу групи.
                              </h4>
                           </div>
                        )}
                     </>
                  );
               })}
            </div>
            <p className='px-2'>
               Завершуючи свою розповідь хочу зауважити, що наповнювати базу даних операцій може практично довільна
               кількість працівників. Причому їм зовсім немає потреби працювати в одній таблиці, як Вам мабуть здалося.
               Кожний користувач може мати індивідуальний файл, щоб не заважати один одному. А тим часом, загальна база
               буде консолідувати всі дані і забезпечувати отримання усіх тих звітів тими працівниками, які цього
               потребують. А якраз оператори (ті, хто вводить дані) можуть не мати доступу до загальних даних. Це
               досягається здатністю Google Sheets використовувати хмарні технології.
            </p>
         </div>
      </div>
   );
};

export default GroupCashFlow;
