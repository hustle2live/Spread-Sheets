'use client';
// import { useRouter } from 'next/navigation';

import { Header } from './components/header';
import { Hero } from './components/hero';
import { TablesGrid } from './components/tablesGrid';
import { Footer } from './components/footer';

export default function Home() {
   // const router = useRouter();

   return (
      <div className='bg-white'>
         <Header />
         <main id='main'>
            <Hero />
            <TablesGrid />
         </main>
         <Footer />
      </div>
   );
}
