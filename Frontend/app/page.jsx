import Header from "@/components/Header";
import Image from "next/image";
import img from '@/images/Paul.png'
import { ArrowRight } from 'lucide-react'; 

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
    <Header />
    <div className="relative h-[82vh] overflow-x-hidden">
      {/* Main background image */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl h-[80vh] mx-8 mt-2">
        <Image
          src={img}
          alt="Wind turbine in sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-16">
          <h1 className="text-white text-4xl mb-8 leading-tight font-semibold">
            Perform Your full duties<br />as a citizen of Cameroon by placing a vote
          </h1>
          
        </div>

        {/* Project preview card */}
        <div className="absolute bottom-24 right-16 bg-white/80 backdrop-blur-sm p-4 rounded-2xl flex items-center space-x-4 cursor-pointer">
          <Image
            src={img}
            alt="Wind turbine preview"
            width={100}
            height={100}
            className="rounded-xl"
          />
          <div className="cursor-pointer">
            <h3 className="font-medium">Vote Freely</h3>
            <p className="text-sm">with transparency</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>Necessary Requirements to vote as a citizen</h1>
      <div>
        
      </div>
    </div>
  </main>
  )
}
