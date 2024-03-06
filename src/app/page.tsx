import { DiscIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import {buttonVariants} from '@/components/ui/button'
import Image from "next/image";
import landingzoneImg from '../../public/landingpage.jpg'
export default function Home() {
  return (
    <main className=" flex flex-col items-center bg-zinc-100">
      <div>
        <header className="gap-2 font-extrabold flex items-center p-6 ">
          <DiscIcon width={25} height={25}/>
          <h1 className="text-[color:black] text-2xl">
            Research Radar
          </h1>
        </header>
      </div>
      <div className="flex flex-col py-2 gap-2">
        <h1 className="flex flex-col text-center text-5xl font-extrabold text-balance bg-gradient-to-r from-red-700 via-red-500 to-red-900 text-transparent bg-clip-text">
        <a className="text-black  px-125-600red-600 text-sm py-5">Research Opportunity Search Tool</a>
            Simplify Your Research Job Search with Research Radar. 
        </h1>
        <p className="text-md text-center px-10 py-5 text-balance">
          Are you tired of endless job searches, scattered across multiple platforms, and wasting precious time filtering through irrelevant listings? Say goodbye to the hassle and hello to Research Radar - your all-in-one destination for finding the perfect research job.
        </p>
        <div className="flex gap-5 flex-row self-center  items-center">
            <Link href={"/careers"} className={buttonVariants({})}>
              Explore Opportunities
            </Link>
            <Link href={"/signup"} className={buttonVariants({variant: "outline"})}>
              Sign Up
            </Link>
        </div>
          <Image 
            className="self-center p-10 rounded-md"
            src={landingzoneImg}
            alt="test tubes"
            loading="lazy"
            width={600}
            style={{borderRadius:"50px"}}
            />


        
      </div>

      <footer className="bg-zinc-200 w-screen p-10 ">
        footer
      </footer>

    </main>
)}