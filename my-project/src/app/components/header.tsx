'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { imageLoader } from './features/imageLoader';
import { usePopup } from './popup/popupContext';

import FaceBookIco from '@/assets/icons/facebook-circle.png';
import TelegramIco from '@/assets/icons/telegram-circle.png';

import SpreadSheetSVG from '@/assets/icons/sheet/sheet(16).svg';
import LogoImage from '@/assets/icons/sheet/sheet(12).svg';
// import LogoImage from '@/assets/icons/logo/logo-gradient-sea-blue-img.png';
import LogoImageTitle from '@/assets/icons/logo/logo-gradient-sea-blue-title.png';

const Header: React.FC = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const { setShow } = usePopup();

   const navigation = [
      { name: 'Бухгалтерський облік', href: '/accounting-system' },
      { name: 'Формування документів', href: '/documents-formation' },
      { name: 'Облік громадських організацій', href: '/public-accounting' },
      { name: 'Мале виробництво', href: '/small-production' },
      { name: 'Облік руху грошових коштів групи', href: '/group-cash-flow' }
   ];

   return (
      <header className='absolute inset-x-0 top-0 z-50 shadow-sm bg-white opacity-90'>
         <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
            <div className='flex lg:flex-1'>
               <Link href='/#' className='-m-1.5 p-1.5 flex items-center'>
                  <abbr className='sr-only'>YESS</abbr>
                  <svg
                     className='logo-icon scale-75 lg:scale-100'
                     version='1.1'
                     viewBox='0 0 475.636 475.636'
                     fill='#7dd2f0'
                     stroke='#7dd2f0'
                     height={34}
                     width={34}
                  >
                     <g>
                        <g>
                           <path d='M200.811,400.719V355.39h107.377v22.353l14.315-14.89l7.176-7.463l6.845-7.119l-6.694-7.201h-7.326v-7.88l-14.315-15.398 v23.278H200.811v-47.011h85.319l-13.308-14.313h-72.012v-49.632h58.695c4.557-7.294,11.845-12.373,20.147-14.315h-78.836v-53.686 h107.378v52.755h14.312v-52.755h110.148v52.755h14.312V32.873c0-9.208-7.49-16.698-16.692-16.698H16.697 C7.485,16.175,0,23.671,0,32.873v365.861c0,5.646,2.839,10.637,7.155,13.663v2.633h5.988c1.149,0.253,2.331,0.398,3.554,0.398 h255.252l14.148-14.709H200.811z M322.503,30.495h107.759c1.316,0,2.395,1.072,2.395,2.389v48.121H322.503V30.495z M322.503,95.316 h110.153v52.494H322.503V95.316z M200.811,30.495h107.377v50.509H200.811V30.495z M200.811,95.316h107.377v52.494H200.811V95.316z M66.005,400.719H15.458c-0.673-0.415-1.149-1.13-1.149-1.985V355.39h51.697V400.719z M66.005,341.069H14.309v-47.004h51.697 V341.069z M66.005,279.755H14.309v-49.628h51.697V279.755z M66.005,215.81H14.309v-53.686h51.697V215.81z M66.005,147.81H14.309 V95.316h51.697V147.81z M186.493,400.719H80.318V355.39h106.175V400.719z M186.493,341.069H80.318v-47.004h106.175V341.069z M186.493,279.755H80.318v-49.628h106.175V279.755z M186.493,215.81H80.318v-53.686h106.175V215.81z M186.493,147.81H80.318V95.316 h106.175V147.81z M186.493,80.999H80.318v-50.51h106.175V80.999z M449.929,279.574v-19.376H324.007l74.103,79.69 c4.637,4.988,4.562,12.748-0.141,17.664l-73.271,76.201h125.231v-11.697c0-7.094,5.757-12.862,12.849-12.862 s12.858,5.769,12.858,12.862v24.556c0,7.087-5.767,12.849-12.858,12.849h-168.28c-5.155,0-9.806-3.062-11.823-7.814 c-2.021-4.755-1.031-10.231,2.56-13.953l85.753-89.193l-85.907-92.399c-3.479-3.743-4.408-9.198-2.363-13.895 c2.046-4.688,6.659-7.721,11.781-7.721h168.28c7.092,0,12.858,5.768,12.858,12.854v32.23c0,7.097-5.767,12.858-12.858,12.858 S449.929,286.666,449.929,279.574z'></path>
                        </g>
                     </g>
                  </svg>
                  <abbr
                     className='text-sky-500 no-underline px-1 md:px-2 italic'
                     title="Yura's Electronic SpreadSheets"
                  >
                     YESS
                  </abbr>
               </Link>
            </div>
            <div className='flex lg:hidden'>
               <button
                  type='button'
                  onClick={() => setMobileMenuOpen(true)}
                  className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
               >
                  <span className='sr-only'>Open main menu</span>
                  <Bars3Icon aria-hidden='true' className='size-6' />
               </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
               {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className='text-sm/6 font-semibold text-gray-900'>
                     {item.name}
                  </Link>
               ))}
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
               {/* <Link href='#' className='text-sm/6 font-semibold text-gray-900'>
                  Log in <span aria-hidden='true'>&rarr;</span>
               </Link> */}
            </div>
         </nav>
         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
            <div className='fixed inset-0 z-50' />
            <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
               <div className='flex items-center justify-between'>
                  <Link href='#' className='-m-1.5 p-1.5 flex items-center'>
                     <svg
                        className='logo-icon scale-75 lg:scale-100'
                        version='1.1'
                        viewBox='0 0 475.636 475.636'
                        fill='#7dd2f0'
                        stroke='#7dd2f0'
                        height={34}
                        width={34}
                     >
                        <g>
                           <g>
                              <path d='M200.811,400.719V355.39h107.377v22.353l14.315-14.89l7.176-7.463l6.845-7.119l-6.694-7.201h-7.326v-7.88l-14.315-15.398 v23.278H200.811v-47.011h85.319l-13.308-14.313h-72.012v-49.632h58.695c4.557-7.294,11.845-12.373,20.147-14.315h-78.836v-53.686 h107.378v52.755h14.312v-52.755h110.148v52.755h14.312V32.873c0-9.208-7.49-16.698-16.692-16.698H16.697 C7.485,16.175,0,23.671,0,32.873v365.861c0,5.646,2.839,10.637,7.155,13.663v2.633h5.988c1.149,0.253,2.331,0.398,3.554,0.398 h255.252l14.148-14.709H200.811z M322.503,30.495h107.759c1.316,0,2.395,1.072,2.395,2.389v48.121H322.503V30.495z M322.503,95.316 h110.153v52.494H322.503V95.316z M200.811,30.495h107.377v50.509H200.811V30.495z M200.811,95.316h107.377v52.494H200.811V95.316z M66.005,400.719H15.458c-0.673-0.415-1.149-1.13-1.149-1.985V355.39h51.697V400.719z M66.005,341.069H14.309v-47.004h51.697 V341.069z M66.005,279.755H14.309v-49.628h51.697V279.755z M66.005,215.81H14.309v-53.686h51.697V215.81z M66.005,147.81H14.309 V95.316h51.697V147.81z M186.493,400.719H80.318V355.39h106.175V400.719z M186.493,341.069H80.318v-47.004h106.175V341.069z M186.493,279.755H80.318v-49.628h106.175V279.755z M186.493,215.81H80.318v-53.686h106.175V215.81z M186.493,147.81H80.318V95.316 h106.175V147.81z M186.493,80.999H80.318v-50.51h106.175V80.999z M449.929,279.574v-19.376H324.007l74.103,79.69 c4.637,4.988,4.562,12.748-0.141,17.664l-73.271,76.201h125.231v-11.697c0-7.094,5.757-12.862,12.849-12.862 s12.858,5.769,12.858,12.862v24.556c0,7.087-5.767,12.849-12.858,12.849h-168.28c-5.155,0-9.806-3.062-11.823-7.814 c-2.021-4.755-1.031-10.231,2.56-13.953l85.753-89.193l-85.907-92.399c-3.479-3.743-4.408-9.198-2.363-13.895 c2.046-4.688,6.659-7.721,11.781-7.721h168.28c7.092,0,12.858,5.768,12.858,12.854v32.23c0,7.097-5.767,12.858-12.858,12.858 S449.929,286.666,449.929,279.574z'></path>
                           </g>
                        </g>
                     </svg>
                     <p className='ps-2 text-sm'>
                        <span className='sr-only'>Yura{`'`}s </span>
                        Yura{`'`}s Electronic <span className='text-sky-500'>SpreadSheets</span>
                     </p>
                  </Link>
                  <button
                     type='button'
                     onClick={() => setMobileMenuOpen(false)}
                     className='-m-2.5 rounded-md p-2.5 text-gray-700'
                  >
                     <span className='sr-only'>Close menu</span>
                     <XMarkIcon aria-hidden='true' className='size-6' />
                  </button>
               </div>

               <div className='mt-6 flow-root divide-y divide-gray-500/10'>
                  {/* <hr /> */}
                  <span className='my-0 divide-y divide-gray-500/10'></span>
                  <div className='my-0 divide-y divide-gray-500/10'>
                     <div className='space-y-2 py-6'>
                        {navigation.map((item) => (
                           <Link
                              key={item.name}
                              href={item.href}
                              className='-mx-3 block rounded-lg px-3 py-2 text-base/6 font-medium text-gray-900 hover:bg-gray-50'
                           >
                              {item.name}
                           </Link>
                        ))}
                     </div>

                     <div className='flex flex-col gap-2 pt-24'>
                        <p className='font-bold text-lg'> Контакти: </p>
                        <div className='pb-2'>
                           <button
                              onClick={() => {
                                 setMobileMenuOpen(false);
                                 setShow(true);
                              }}
                              className='burger-menu-btn p-2 px-4 text-md text-sm rounded-lg '
                           >
                              Залишити заявку
                           </button>
                        </div>

                        <div className='flex gap-3'>
                           <p>Email:</p>
                           <Link href='mailto:yuras0720@gmail.com' className=' text-indigo-400 hover:text-indigo-600'>
                              yuras0720@gmail.com
                           </Link>
                        </div>

                        <div className='flex gap-3'>
                           <p>Соц.мережі: </p>
                           <div className='social-links flex gap-2'>
                              <Link
                                 href='https://www.facebook.com/by0710'
                                 target='_blank'
                                 className='font-semibold text-indigo-600'
                              >
                                 <Image
                                    style={{ display: 'inline-block' }}
                                    alt='facebook'
                                    loader={imageLoader}
                                    src={FaceBookIco}
                                    width={24}
                                    height={24}
                                 />
                              </Link>
                              <Link
                                 href='http://t.me/YesForSheets'
                                 target='_blank'
                                 className='font-semibold text-indigo-600'
                              >
                                 <Image
                                    style={{ display: 'inline-block' }}
                                    alt='facebook'
                                    loader={imageLoader}
                                    src={TelegramIco}
                                    width={24}
                                    height={24}
                                 />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </DialogPanel>
         </Dialog>
      </header>
   );
};

export { Header };
