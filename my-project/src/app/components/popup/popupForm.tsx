'use client';

import { useRef } from 'react';
// import Image from 'next/image';
// import { imageLoader } from '@/components/features/imageLoader';
import { XMarkIcon } from '@heroicons/react/20/solid';

import { usePopup } from './popupContext';
import Link from 'next/link';

const PopupForm: React.FC = () => {
   const { show, setShow } = usePopup();
   const addEmailRef = useRef<HTMLDivElement | null>(null);

   const isHidden = Boolean(!show);

   const handleAddEmail = () => {
      if (!addEmailRef.current) {
         return;
      }
      addEmailRef.current.classList.toggle('expanded');
   };

   return (
      <div hidden={isHidden} className='min-h-screen min-w-full fixed z-30 left-0 top-0'>
         <div
            className='overlay bg-opacity-20 min-w-full min-h-full h-full w-full absolute'
            onClick={() => setShow(false)}
         ></div>

         <div className='popup-form bg-violet-800 z-40 min-w-80 rounded-xl flex max-h-dvh h-auto flex-1 flex-col justify-center px-6 py-12 lg:px-8 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <div className=' text-gray-100'>
               {/* <Image
                  className='absolute top-5 right-5 '
                  loader={imageLoader}
                  width={36}
                  height={36}
                  alt='Your Company'
                  src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
               /> */}
               <svg
                  className='absolute top-5 right-5 '
                  version='1.1'
                  viewBox='0 0 475.636 475.636'
                  fill='#ffffff'
                  stroke='#7dd2f0'
                  height={24}
                  width={24}
               >
                  <g>
                     <g>
                        <path d='M200.811,400.719V355.39h107.377v22.353l14.315-14.89l7.176-7.463l6.845-7.119l-6.694-7.201h-7.326v-7.88l-14.315-15.398 v23.278H200.811v-47.011h85.319l-13.308-14.313h-72.012v-49.632h58.695c4.557-7.294,11.845-12.373,20.147-14.315h-78.836v-53.686 h107.378v52.755h14.312v-52.755h110.148v52.755h14.312V32.873c0-9.208-7.49-16.698-16.692-16.698H16.697 C7.485,16.175,0,23.671,0,32.873v365.861c0,5.646,2.839,10.637,7.155,13.663v2.633h5.988c1.149,0.253,2.331,0.398,3.554,0.398 h255.252l14.148-14.709H200.811z M322.503,30.495h107.759c1.316,0,2.395,1.072,2.395,2.389v48.121H322.503V30.495z M322.503,95.316 h110.153v52.494H322.503V95.316z M200.811,30.495h107.377v50.509H200.811V30.495z M200.811,95.316h107.377v52.494H200.811V95.316z M66.005,400.719H15.458c-0.673-0.415-1.149-1.13-1.149-1.985V355.39h51.697V400.719z M66.005,341.069H14.309v-47.004h51.697 V341.069z M66.005,279.755H14.309v-49.628h51.697V279.755z M66.005,215.81H14.309v-53.686h51.697V215.81z M66.005,147.81H14.309 V95.316h51.697V147.81z M186.493,400.719H80.318V355.39h106.175V400.719z M186.493,341.069H80.318v-47.004h106.175V341.069z M186.493,279.755H80.318v-49.628h106.175V279.755z M186.493,215.81H80.318v-53.686h106.175V215.81z M186.493,147.81H80.318V95.316 h106.175V147.81z M186.493,80.999H80.318v-50.51h106.175V80.999z M449.929,279.574v-19.376H324.007l74.103,79.69 c4.637,4.988,4.562,12.748-0.141,17.664l-73.271,76.201h125.231v-11.697c0-7.094,5.757-12.862,12.849-12.862 s12.858,5.769,12.858,12.862v24.556c0,7.087-5.767,12.849-12.858,12.849h-168.28c-5.155,0-9.806-3.062-11.823-7.814 c-2.021-4.755-1.031-10.231,2.56-13.953l85.753-89.193l-85.907-92.399c-3.479-3.743-4.408-9.198-2.363-13.895 c2.046-4.688,6.659-7.721,11.781-7.721h168.28c7.092,0,12.858,5.768,12.858,12.854v32.23c0,7.097-5.767,12.858-12.858,12.858 S449.929,286.666,449.929,279.574z'></path>
                     </g>
                  </g>
               </svg>
               <h2 className='mt-4 text-center text-2xl font-bold tracking-tight'>Залиште заявку</h2>
            </div>

            <button
               className='absolute -right-5 -top-5 sm:-right-8 sm:-top-8 '
               title='Close'
               onClick={() => setShow(false)}
            >
               <XMarkIcon aria-hidden='true' className='size-6 text-gray-300 hover:text-gray-600' />
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
                        className='flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6'
                     >
                        Відправити
                     </button>
                  </div>
               </form>

               <div ref={addEmailRef} className='mt-6 text-sm/6 add-email transition-all'>
                  <p className='text-gray-300 my-0 py-0'>
                     Написати{' '}
                     <button className='underline bg-transparent border-0 outline-none' onClick={handleAddEmail}>
                        на Email{' '}
                     </button>
                  </p>
                  <div>
                     <Link
                        className='block text-sm/3 font-medium text-gray-400 hover:text-gray-300 italic'
                        href='mailto:yuras0720@gmail.com'
                        title='yuras0720@gmail.com'
                     >
                        yuras0720@gmail.com
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export { PopupForm };
