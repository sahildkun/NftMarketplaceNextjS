import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import rect from  '../public/Rectangle 22.png'
import rect1 from '../public/Rectangle 221.png'
import rect2 from '../public/Rectangle 222.png'
import rect3 from '../public/Rectangle 223.png'
function Middle() {
    return (
        <div class="h-auto bg-bgpic ">
       <div class="flex flex-col md:flex-row items-center px-5 mx-auto  space-y-8 lg:space-x-80  pt-36" >
           <div class="text-4xl text-white lg:text-6xl font-bold text-center lg:ml-12 lg:mt-12 md:text-5xl md:text-left" id="nic">Trending This Week</div>
           <div class="max-w-md text-md text-center text-white lg:ml-12 mx-auto md:text-left md:w-1/2">Various kinds of Artwork categories that are trending this week.The trend will be reset evrey week.Dont miss out on the best artworks every week</div>
       </div>
       <div class="md:flex justify-around py-20 space-y-20 md:space-y-0">
        <div class="flex flex-col space-y-20">
        
        <div class="  px-5 md:px-0 " id="ima">
            <Image src={rect} alt='image' class="img__img"/>
           <div class="img__overlay pt-[14rem]">
             <div  class="flex space-x-14 justify-center  backdrop-blur-xl bg-white/0 rounded-b-3xl w-[496px] h-[105px] pt-10">
               <div class="text-xl md:text-3xl text-white"id="nic">Miles Grogosters</div>
               <div><button class="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-2 rounded-lg">Collect Now</button></div>
             </div>
            </div>
        </div>

        <div class="  px-5 md:px-0 " id="ima">
            <Image src={rect2} alt='image' class="img__img"/>
           <div class="img__overlay pt-[14rem]">
             <div  class="flex space-x-14 justify-center backdrop-blur-xl bg-white/0 rounded-b-3xl w-[496px] h-[105px] pt-10">
               <div class="text-xl md:text-3xl text-white"id="nic">Miles Grogosters</div>
               <div><button class="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-2 rounded-lg">Collect Now</button></div>
             </div>
             </div>
        </div>

        </div>



        <div class="flex flex-col space-y-20">

        <div className="  px-5 md:px-0 " id="ima">
            <Image src={rect1} alt='image' class="img__img"/>
           <div class="img__overlay pt-[14rem]">
             <div  class="flex space-x-20 justify-center backdrop-blur-xl bg-white/0 rounded-b-3xl w-[496px] h-[105px] pt-10">
               <div class="text-xl md:text-3xl text-white"id="nic">Reox Fancxy</div>
               <div><button class="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-2 rounded-lg">Collect Now</button></div>
             </div>
             </div>
        </div>

        <div className="  px-5 md:px-0 " id="ima">
            <Image src={rect3} alt='image' class="img__img"/>
           <div class="img__overlay pt-[14rem]">
             <div  class="flex space-x-28 justify-center backdrop-blur-xl bg-white/0 rounded-b-3xl  w-[496px] h-[105px] pt-10">
               <div class="text-xl md:text-3xl text-white"id="nic">Tuinz Rey</div>
               <div><button class="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-2 rounded-lg">Collect Now</button></div>
             </div>
             </div>
        </div>

        </div>
       </div>
       <br></br> <br></br> <br></br> <br></br>
       

       </div>
     )
}

export default Middle