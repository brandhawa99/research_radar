import { DiscIcon } from "@radix-ui/react-icons"
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <header className="gap-2 flex items-center bg-red-600 border-solid border-2 border-black p-4 rounded-md">
          <h1 className="text-[color:white] text-xl">
            Research Radar
          </h1>
            <DiscIcon color="white" width={25} height={25}/>
        </header>
      </div>
      <div>
        <p>
          Find your next research job
        </p>
      </div>

    </main>
)}