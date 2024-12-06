"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../images/favicon.png'
import Navigation from './Navigation'
import { Button } from './ui/button'
import VoteModal from './VoteModal'

const Header = () => {
  const [showVoteModal, setShowVoteModal] = useState(false);

  const handleVoteClick = () => {
    setShowVoteModal(true);
  };

  return (
    <header className='top-0 left-0 w-full text-black z-50'>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className='flex justify-center items-center'>
          <Image src={img} className='h-20 w-20' alt='CAMVote Logo' />
          <h1 className='font-bold'>CAMVote<span className='text-primary'> .</span></h1>
        </Link>
        <nav className="hidden xl:flex gap-6 justify-between items-center">
          <Navigation />
        </nav>
        <div className="flex items-center">
          <Link href="/createVote">
            <Button className="bg-primary text-white hover:border-2 border-primary hover:bg-white hover:text-primary rounded-full font-bold">
              Create Voting Account
            </Button>
          </Link>
        </div>
      </div>

      {/* Vote Modal */}
      {showVoteModal && (
        <VoteModal onClose={() => setShowVoteModal(false)} />
      )}
    </header>
  )
}

export default Header;