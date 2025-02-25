'use client';

import { Header } from './components/header';
import { Hero } from './components/hero';


import { Footer } from './components/footer';
import { Content } from './components/mainContent';
import { PopupForm } from './components/popupForm';
import { useState } from 'react';

export default function Home() {
   const [show, setShow] = useState(false);

   return (
      <div className='bg-white relative'>
         <Header />
         <main id='main'>
            <Hero />
            <Content showForm={() => setShow(true)} />
         </main>
         <Footer />
         <PopupForm show={show} onClose={() => setShow(false)} />
      </div>
   );
}
