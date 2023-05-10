import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import Carousel from '@/components/Slider2/Carousel';
import Slider1 from '@/components/Slider1';
import Swiper from '@/components/Swiper';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

return (
  <div className="flex items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-tr from-blue-500 to-red-400">
  <Carousel/>
   {/* <Slider1/>  */}
   {/* <Swiper/> */}
  
    </div>
  )
}
