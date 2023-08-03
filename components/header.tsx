import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar bg-[#1d5d9b] justify-between">
      <div className="flex-none pl-5">
        <Link href="/">
          <div className="font-bold  text-lg flex m-4 ">
            <Image
              className="w-8 h-fit my-1 "
              alt=""
              src="/bps.png"
              width={1080}
              height={1080}
            ></Image>
            <h1 className="text-xl italic pl-3 text-white">
              BADAN PUSAT STATISTIK
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex-none pr-10 ">
        <ul className=" p-3 px-7 text-lg font-bold border rounded-full hover:bg-slate-300 bg-[#FBEEAC] text-black">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
