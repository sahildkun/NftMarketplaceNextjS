import React from 'react'
import { useState, useEffect} from 'react'
import Link from 'next/link'
import Image from "next/image"
import img from '../public/nft4.jpg'
import img1 from '../public/nft1.jpg'
import img2 from '../public/nft2.jpg'
import img4 from '../public/nft5.jpg'
import img5 from '../public/nft6.jpg'
import img6 from '../public/nft7.png'
import img7 from '../public/nft8.png'
import img8 from '../public/nft.png'

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const toRotate = ["SUPER AMAZING.","SUPER RARE.", "AWE-INSPIRING."];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() *  100);
  const period = 300;

  useEffect( () => {
    let ticker = setInterval(() => {
        tick();
    },delta)
    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length + 1);
    setText(updatedText);
    if(isDelete){
      setDelta(prevDelta => prevDelta /2)
    }
    if (!isDelete && updatedText === fullText){
      setIsDelete(true);
      setDelta(period);
    }
    else if (isDelete && updatedText === ''){
      setIsDelete(false);
      setLoopNum(loopNum + 1);
      setDelta(250);
    }
  }
  return (
    <div className='flex flex-col-reverse md:flex-row items-center px-8 mx-auto space-y-0 md:space-y-0 h-screen bg-bgpic' id='nic'>
      {/* containers */}
      <div className='flex flex-col pb-[6rem] space-y-8 md:w-1/2'>
        <h1 className='text-3xl text-white lg:text-6xl font-bold text-center lg:ml-12 lg:mt-7 md:text-3xl md:text-left' id='nic'>DISCOVER AND COLLECT DIGITAL ARTWORKS THAT ARE<br></br><span className='text-[#f1b73b] wrap'>{text}</span></h1>
        <p className='max-w-md text-md text-center text-white lg:ml-12 mx-auto md:text-left'>The Most Secure anad reliable NFT marketplace. Truly amazing and unique Digital Artworks. Signed and issued by the creators made by blockchain technology. </p> 
        <div className='space-x-6 lg:ml-12 mx-auto'>
          <Link className='px-7 py-3 text-white rounded-3xl hover:bg-gradient-to-br from-purple-800 to-purple-400 border-2 border-purple-800 bg-transparent focus:scale-95 transition-all duration-200 ease-out' href='/'>Lets Explore</Link>
          <Link className='px-7 py-3 text-white rounded-3xl hover:bg-gradient-to-br from-purple-800 to-purple-400 border-2 border-purple-800 bg-transparent focus:scale-95 transition-all duration-200 ease-out' href='/'>Sell NFT</Link>
        </div>
      </div>
      {/* image */}
      <div className='md:w-1/2 items-center justify-center text-center text-white' id='nic'>
        <div className='right pt-28 md:pt-11'>
          <div className='blob'></div>
          <div className='card-group'>
            <div className='small cards'>
            <Image src={img} className='rounded-xl  h-full w-full border-2' alt=''/>
            </div>
            <div className='big cards'>
              <Image src={img7} className='rounded-xl h-full w-full  border-2' alt=''/>
            </div>
            <div className='small cards'>
            <Image src={img4} className='rounded-xl  h-full w-full border-2'alt=''/>
            </div>
            <div className='big cards'>
              <Image src={img1} className='rounded-xl  h-full w-full  border-2'alt=''/>
            </div>
            <div className='small cards'>
            <Image src={img8} className='rounded-xl  h-full w-full border-2'alt=''/>
            </div>
            <div className='big cards'>
              <Image src={img2} className='rounded-xl  h-full w-full  border-2' alt=''/>
            </div>  
            <div className='small cards'>
            <Image src={img5} className='rounded-xl  h-full w-full border-2'alt=''/>
            </div>
            <div className='big cards'>
             <Image src={img6} className='rounded-xl  h-full w-full border-2' alt=''/>
            </div>    
        </div>
        </div>
      </div>

    </div>
  )
}

export default Hero