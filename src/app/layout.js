'use client';

import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { usePathname, useRouter } from 'next/navigation';
import NewsField from '@/components/Home/newsfield/NewsField';

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const router = usePathname();

  console.log(router);
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header
          title={`${
            router === '/'
              ? 'It has an exhibition grade from the Ministry of Industry, Mines and Trade'
              : router.substring(1)
          }`}
        />
        {children}
        <NewsField />
        <Footer />
      </body>
    </html>
  );
}
