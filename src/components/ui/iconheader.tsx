import React from "react";
import { DiscIcon } from "@radix-ui/react-icons";

export default function Iconheader() {
  return (
    <header className="gap-2 font-extrabold flex items-center py-6 ">
      <DiscIcon width={25} height={25} />
      <h1 className="text-[color:black] text-2xl">Research Radar</h1>
    </header>
  );
}
