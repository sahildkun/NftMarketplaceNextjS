import React from 'react'
import Link from 'next/link'
import Image from "next/image"

function Card({img,imgg,artist,network,followstats}) {
  return (
    <div class=" bg-white/10 backdrop:blur-sm rounded-3xl ">
    <div class="rounded overflow-hidden shadow-lg max-w-sm h-full">
        <div class="w-full h-24">
            <Image src={imgg} alt="" class="relative"/>
        </div>
        <div class=" w-22 h-22 border-white">
            <Image src={img} alt="" class="px-32 py-12 relative"/>
        </div>
        <div class="px-18 py-18">

        <div class="font-bold text-xl flex justify-center mb-2 text-white">
             {artist}
        </div>
        <div class="font-bold text-xl flex justify-center mb-2 text-white">
            {network} Artwork
            
        </div>
        <div class="py-4">
        <button class="font-semibold rounded-md px-16 h-12 w-18 text-black text-xl bg-gradient-to-br to-purple-500 from-indigo-700 cursor-pointer ">
            {followstats}
        </button>
        </div>
    </div>
    </div>
    </div>

  )
}

export default Card