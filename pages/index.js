import Head from 'next/head'
import Image from 'next/image'
import Artist from '../components/ArtistCard'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Middle from '../components/Middle'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Middle/>
   <Artist/>
   <Footer/>
    </>
  )
}
