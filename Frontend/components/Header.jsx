import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../images/favicon.png'
import Navigation from './Navigation'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className=' top-0 left-0 w-full text-black z-50 '>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className='flex justify-center items-center'>
          <Image src={img} className='h-20 w-20' alt='' />
          <h1 className='font-bold'>CAMVote<span className='text-primary'> .</span></h1>
        </Link>
        <div className="hidden xl:flex gap-6 justify-between items-center">
          <Navigation />
        </div>
        <div>
            <Link href="/contact">
                <Button className="bg-primary text-white hover:border-2 border-primary hover:bg-white hover:text-primary rounded-full font-bold mr-6">Vote</Button>
            </Link>
            <Link href="/contact">
                <Button className="bg-primary text-white hover:border-2 border-primary hover:bg-white hover:text-primary rounded-full font-bold">Create Voting Account</Button>
            </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
