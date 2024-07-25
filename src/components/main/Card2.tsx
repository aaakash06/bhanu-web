"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function Card2({ image }: { image: string }) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-1 sm:p-2 overflow-hidden bg-white w-[15rem] max-xl:w-[12rem] dark:bg-zinc-900 relative h-[15rem] ">
        <Image
          src={`/${image}.webp`}
          alt="jordans"
          fill
          className="object-cover"
        />

        {/* <h2 className="text-xl  font-bold mt-3">Horror</h2> */}
      </BackgroundGradient>
    </div>
  );
}
