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
               <Link href='/#' className='-m-1.5 p-1.5 flex'>
                  <span className='sr-only'>Your Company</span>
                  <Image
                     src={LogoImage}
                     height={38}
                     width={38}
                     loader={imageLoader}
                     alt='spread sheets'
                     style={{
                        margin: '0 auto auto',
                        filter: 'hue-rotate(50deg) contrast(120%) brightness(88%)'
                     }}
                  />
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
                  <Link href='#' className='-m-1.5 p-1.5'>
                     <span className='sr-only'>Your Company</span>
                     <img
                        alt=''
                        src='https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                        className='h-8 w-auto'
                     />
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

               <div className='mt-6 flow-root'>
                  {/* <p>Сторінки:</p> */}
                  <hr />
                  <div className='-my-6 divide-y divide-gray-500/10'>
                     <div className='space-y-2 py-6'>
                        {navigation.map((item) => (
                           <Link
                              key={item.name}
                              href={item.href}
                              className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                           >
                              {item.name}
                           </Link>
                        ))}
                     </div>

                     <div className='flex flex-col gap-2 py-6'>
                        <p className='font-bold text-lg'> Контакти: </p>
                        <div className='pb-2'>
                           <button
                              onClick={() => {
                                 setMobileMenuOpen(false);
                                 setShow(true);
                              }}
                              className='p-2 px-4 text-md text-sm rounded-lg text-white bg-indigo-600 hover:bg-indigo-400'
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
