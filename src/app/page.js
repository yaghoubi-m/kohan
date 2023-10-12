'use client';
import Image360Deg from '@/components/360image/360Image';
import Header from '@/components/Header/Header';
import AboutAbility from '@/components/Home/AboutAbility/AboutAbility';
import AboutUs from '@/components/Home/AboutUs/AboutUS';
import SampleProjects from '@/components/Home/SampleProjects/SampleProjects';
import Customers from '@/components/Home/customers/Customers';

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <Image360Deg />
      <SampleProjects />
      <Customers />
      <AboutAbility />
    </main>
  );
}
