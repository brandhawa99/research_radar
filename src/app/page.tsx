import { DiscIcon } from "@radix-ui/react-icons"
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex w-100 flex-col items-center bg-zinc-100">
      <div>
        <header className="gap-2 font-extrabold flex items-center p-6 ">
          <DiscIcon width={25} height={25}/>
          <h1 className="text-[color:black] text-2xl">
            Research Radar
          </h1>
        </header>
      </div>
      <div className="flex flex-col justify-center items-center py-8 px-10 gap-7">
        <h1 className="text-center text-5xl font-extrabold text-balance bg-gradient-to-r from-red-700 via-red-500 to-red-900 text-transparent bg-clip-text">
            Simplify Your Research Job Search with Research Radar. 
        </h1>
        <p className="text-md text-center px-5 text-balance">
          Are you tired of endless job searches, scattered across multiple platforms, and wasting precious time filtering through irrelevant listings? Say goodbye to the hassle and hello to Research Radar - your all-in-one destination for finding the perfect research job.
        </p>
        <Link href={"/careers"}>
            Explore Opportunities
        </Link>
      </div>

    </main>
)}