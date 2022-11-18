import Link from "next/link"
import Image from "next/image"
import logo from '../public/NFTKING.png'
function Navbar() {
  return (
    <div>
<div className='bg-nav backdrop-blur-md w-full border-b-[0.5px]'>
    {/* navbar */}
    <nav className='relative container mx-auto bg-transparent w-full py-3' id='nic'>
      {/* flexx container */}
        <div className='flex items-center justify-between'>
         {/* logo */}
         <div className='pl-6'>
            <Link href='/'><Image src={logo} alt='sfvf'/></Link>
         </div>
         {/* menu */}
         <div className='hidden md:flex space-x-10 text-white'>
            <Link href='/Marketplace' className=' hover:text-purple-500'>MARKETPLACE</Link>
            <Link href='/explore'  className='hover:text-purple-500'>Explore</Link>
            <Link href='/mintnft'  className='hover:text-purple-500'>MINT Nft</Link>
            <Link href='/about'  className='hover:text-purple-500'>About</Link>
            <Link href='/contact'  className='hover:text-purple-500'>Contact</Link>
         </div>
         <div className='md:flex space-x-3 hidden pr-6'>
          {/* buttons */}
         
        <Link href='/'>
         
        <button  className='px-4 py-1.5 text-white rounded-3xl bg-purple-800 border-2 border-purple-800 hover:border-purple-800 hover:bg-transparent focus:scale-95 transition-all duration-200 ease-out'>Connect Wallet</button>
        
       </Link>
         </div>
        </div>
    </nav>
    </div>


    </div>
  )
}

export default Navbar