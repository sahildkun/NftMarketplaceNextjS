import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    
    <div class="top-0 w-full h-screen backdrop:blur-sm bg-bgpic">

    <div class="w-11/12 md:w-5/6 9xl:w-2/6 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/10 rounded-lg md:p-20 p-10">
    
    <h1 class="text-white font-semibold text-3xl md:text-5xl mb-5 flex justify-center">
        Never miss a drop!
    </h1>
    <p class="text-white text-sm md:text-xl mb-14 flex justify-center">
         Subscribe to super-exclusive drop list and be the first to know about upcoming drops
    </p>
    <form action="a" method="get" class="flex items-center relative">
        <input 
        type="email"
        placeholder="Enter your email address"
        class="placeholder:text-white text-white text-xs md:text-xl focus:border-gray-500 active:border-gray-500 w-full form-input px-4 py-3 rounded-md bg-gray-500 border-white/30"
        />
        <button class="font-semibold rounded-md px-5 absolute right-0 h-full text-white text-xl bg-gradient-to-br to-purple-500 from-indigo-500">
            Subscribe
        </button>
        
    </form>
    </div>
    </div>
    
  )
}

export default Footer