'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

import { Footer } from '@/components/footer';
import { Content } from '@/components/сontent';
import { PopupForm } from '@/components/popup/popupForm';

export default function Home() {
   return (
      <div className='bg-white relative'>
         <Header />
         <main id='main'>
            <Hero />
            <Content />
         </main>
         <Footer />
         <PopupForm />
      </div>
   );
}
