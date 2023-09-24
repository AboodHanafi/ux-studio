import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/NavBar/NavBar'
import HeroSection from '@/components/HeroSection/HeroSection'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'
import { CardsText } from '@/assets/dummyData'

export default function Home() {
  return (
    <div className='px-4'>
    <Navbar />
    <HeroSection />
    <div className='space-y-8 py-16 text-center'>
      <Typography fontSize='text-lg md:text-xl' fontWeight='font-semibold' color='text-black'>
      خدماتنا
      </Typography>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-8'>
    {CardsText.map((item)=>(
    <Card key={item.id} text={item.text}/>
    ))}
    </div>
    </div>
  </div>
  )
}
