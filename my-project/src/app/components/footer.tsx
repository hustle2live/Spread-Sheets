'use client';

import Image from 'next/image';
// import FileSVG from '@/public/file.svg';
// import WindowSVG from '@/public/window.svg';
// import GlobeSVG from '@/public/globe.svg';
import LogoText from '@/assets/icons/logo/logo-gradient-title.png';

import { imageLoader } from '@/app/components/features/imageLoader';
import Link from 'next/link';

const Footer: React.FC = () => {
   return (
      <footer className='bg-[#21262c] opacity-100  !text-[#cacaca]'>
         <div className='container-fluid px-4 pb-0 pt-0 xl:pt-28 lg:pt-28 md:pt-28 xl:pb-20 lg:pb-20 md:pb-20 xxl:!px-10'>
            <footer className=' bg-[#21262c] opacity-100  !text-[#cacaca] '>
               <div className='container py-16 xl:!py-20 lg:!py-20 md:!py-20 m-auto'>
                  <div className='flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0'>
                     <div className='md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]'>
                        <div className='widget !text-[#cacaca]'>
                           <h4 className='widget-title !text-white !mb-3 font-semibold'>Електронні таблиці Юрія</h4>
                           <h4 className='widget-title !text-white !mb-3 '>Юрій Бугайов (ФОП Бугайов Ю.О.)</h4>
                           <Image
                              src={LogoText}
                              width={200}
                              height={200}
                              loader={imageLoader}
                              alt='YESS picture logotype'
                           ></Image>
                           {/* <nav className='nav social social-white'>
                              <Link
                                 className='!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]'
                                 href='#'
                              >
                                 <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                              </Link>

                              <Link
                                 className='!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]'
                                 href='#'
                              >
                                 <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                              </Link>
                              <Link
                                 className='!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]'
                                 href='#'
                              >
                                 <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                              </Link>
                              <Link
                                 className='!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]'
                                 href='#'
                              >
                                 <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                              </Link>
                              <Link
                                 className='!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]'
                                 href='#'
                              >
                                 <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                              </Link>
                           </nav> */}
                        </div>
                     </div>
                     <div className='md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]'>
                        <div className='widget !text-[#cacaca]'>
                           <h4 className='widget-title !text-white !mb-3'>Зв{`'`}яжіться зі мною</h4>
                           <address className='xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4'>
                              Україна, м.Київ
                           </address>
                           <Link className='!text-[#cacaca] hover:!text-[#3f78e0]' href='mailto:yuras0720@gmail.com'>
                              yuras0720@gmail.com
                           </Link>
                           <br /> 00 (123) 456 78 90
                        </div>
                     </div>
                     <div className='md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]'>
                        <div className='widget !text-[#cacaca]'>
                           <h4 className='widget-title !text-white !mb-3'>Learn More</h4>
                           <ul className='pl-0 list-none   !mb-0'>
                              <li>
                                 <Link className='!text-[#cacaca] hover:!text-[#3f78e0]' href='#'>
                                    About Us
                                 </Link>
                              </li>
                              <li className='!mt-[0.35rem]'>
                                 <Link className='!text-[#cacaca] hover:!text-[#3f78e0]' href='#'>
                                    Our Story
                                 </Link>
                              </li>
                              <li className='!mt-[0.35rem]'>
                                 <Link className='!text-[#cacaca] hover:!text-[#3f78e0]' href='#'>
                                    Projects
                                 </Link>
                              </li>
                              <li className='!mt-[0.35rem]'>
                                 <Link className='!text-[#cacaca] hover:!text-[#3f78e0]' href='#'>
                                    Terms of Use
                                 </Link>
                              </li>
                              <li className='!mt-[0.35rem]'>
                                 <Link className='!text-[#cacaca] hover:!text-[#3f78e0]' href='#'>
                                    Privacy Policy
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className='md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]'>
                        <div className='widget !text-[#cacaca]'>
                           <h4 className='widget-title !text-white !mb-3'>Our Newsletter</h4>
                           <p className='!mb-5'>
                              Subscribe to our newsletter to get our news & deals delivered to you.
                           </p>
                           <div className='newsletter-wrapper'>
                              <div id='mc_embed_signup'>
                                 <form
                                    action='https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a'
                                    method='post'
                                    id='mc-embedded-subscribe-form'
                                    name='mc-embedded-subscribe-form'
                                    className='validate dark-fields'
                                    target='_blank'
                                    noValidate
                                 >
                                    <div id='mc_embed_signup_scroll'>
                                       <div className='!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full'>
                                          <input
                                             type='email'
                                             value=''
                                             name='EMAIL'
                                             className='w-3/4 required email form-control block text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none     focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca]   bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]  '
                                             placeholder=''
                                             id='mce-EMAIL'
                                          />

                                          <label
                                             className='!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0'
                                             htmlFor='mce-EMAIL'
                                          >
                                             Email Address
                                          </label>

                                          <input
                                             type='submit'
                                             value='Join'
                                             name='subscribe'
                                             id='mc-embedded-subscribe'
                                             className='w-1/4 btn btn-primary rounded-e-lg !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0]   active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !relative z-[2] focus:z-[5] hover:!transform-none border-0 cursor-pointer hover:opacity-90'
                                          />
                                       </div>

                                       <div id='mce-responses' className='clear'>
                                          <div
                                             className='response'
                                             id='mce-error-response'
                                             style={{ display: 'none' }}
                                          ></div>
                                          <div
                                             className='response'
                                             id='mce-success-response'
                                             style={{ display: 'none' }}
                                          ></div>
                                       </div>

                                       <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
                                          <input type='text' name='b_ddc180777a163e0f9f66ee014_4b1bcfa0bc' value='' />
                                       </div>

                                       <div className='clear'></div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='!mb-4 py-10 container text-center'>
                     <hr className='w-full mb-10 border-gray-600' />
                     <p className='w-full'>
                        © 2025 Yura{`'`}s Electronic SpreadSheets.{' '}
                        <span className=' !text-[#cacaca]'>All rights reserved.</span>
                     </p>
                  </div>
               </div>
            </footer>
         </div>
      </footer>
   );
};

export { Footer };

{
   /* // const Footer: React.FC = () => {
//    return (
//       <footer className='py-24 row-start-3 flex gap-6 flex-wrap items-center justify-center'>
//          <Link
//             className='flex items-center gap-2 hover:underline hover:underline-offset-4'
//             href='https://nextjs.org/learn'
//             target='_blank'
//             rel='noopener noreferrer'
//          >
//             <Image loader={imageLoader} aria-hidden src={FileSVG} alt='File icon' width={16} height={16} />
//             Learn
//          </Link>
//          <Link
//             className='flex items-center gap-2 hover:underline hover:underline-offset-4'
//             href='https://vercel.com/templates?framework=next.js'
//             target='_blank'
//             rel='noopener noreferrer'
//          >
//             <Image loader={imageLoader} aria-hidden src={WindowSVG} alt='Window icon' width={16} height={16} />
//             Examples
//          </Link>
//          <Link
//             className='flex items-center gap-2 hover:underline hover:underline-offset-4'
//             href='https://nextjs.org'
//             target='_blank'
//             rel='noopener noreferrer'
//          >
//             <Image loader={imageLoader} aria-hidden src={GlobeSVG} alt='Globe icon' width={16} height={16} />
//             Go to nextjs.org →
//          </Link>
//       </footer>
//    );
// }; */
}
