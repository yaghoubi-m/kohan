"use client";
import Image360Deg from '@/components/360image/360Image';
import Header from '@/components/Header/Header';
import AboutUs from '@/components/Home/AboutUs/AboutUS';

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <Image360Deg />
    </main>
  );
}
