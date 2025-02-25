'use client';

import { Header } from './components/header';
import { Hero } from './components/hero';

// import { TablesGrid } from './components/tablesGrid';

import { Footer } from './components/footer';
import { Content } from './components/mainContent';

export default function Home() {
   // const router = useRouter();
   console.log('render');

   return (
      <div className='bg-white'>
         <Header />
         <main id='main'>
            <Hero />
            <Content />
         </main>
         <Footer />
      </div>
   );
}
