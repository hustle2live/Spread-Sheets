'use client';

import Image from 'next/image';
import { imageLoader } from '@/components/features/imageLoader';
import { XMarkIcon } from '@heroicons/react/20/solid';

import { usePopup } from './popupContext';

const PopupForm: React.FC = () => {
   const { show, setShow } = usePopup();

   const isHidden = Boolean(!show);

   return (
      <div hidden={isHidden} className='min-h-screen min-w-full fixed z-30 left-0 top-0'>
         <div
            className='overlay bg-opacity-20 min-w-full min-h-full h-full w-full absolute'
            onClick={() => setShow(false)}
         ></div>

         <div className='bg-violet-800 z-40 min-w-80 rounded-xl flex max-h-dvh h-auto flex-1 flex-col justify-center px-6 py-12 lg:px-8 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <div className=' text-gray-100'>
               <Image
                  className='absolute top-5 right-5 '
                  loader={imageLoader}
                  width={36}
                  height={36}
                  alt='Your Company'
                  src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
               />
               <h2 className='mt-4 text-center text-2xl font-bold tracking-tight'>Залиште заявку</h2>
            </div>

            <button className='absolute -right-10 -top-10' title='Close' onClick={() => setShow(false)}>
               <XMarkIcon aria-hidden='true' className='size-6 text-blue-800 ' />
            </button>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
               <form action='#' method='POST' className='space-y-4'>
                  <div>
                     <label htmlFor='name' className='block text-sm/6 font-medium text-gray-100'>
                        Ваше Ім{`'`}я
                     </label>
                     <div className='mt-2'>
                        <input
                           id='name'
                           name='name'
                           type='text'
                           required
                           autoComplete='name'
                           className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                        />
                     </div>
                  </div>

                  <div>
                     <div className='flex items-center justify-between'>
                        <label htmlFor='tel' className='block text-sm/6 font-medium text-gray-100'>
                           Ваш Телефон
                        </label>
                     </div>
                     <div className='mt-2'>
                        <input
                           id='tel'
                           name='tel'
                           type='tel'
                           required
                           autoComplete='tel'
                           className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type='submit'
                        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6'
                     >
                        Відправити
                     </button>
                  </div>
               </form>

               <p className='mt-8 text-sm/6 text-gray-300'>Написати на е-мейл: </p>
               <a
                  className='block text-sm/4 font-medium text-indigo-300 hover:text-indigo-200 '
                  href='mailto:address@gmail.com'
               >
                  address@gmail.com
               </a>
            </div>
         </div>
      </div>
   );
};

export { PopupForm };
