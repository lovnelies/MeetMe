"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-400">
        Hellow
        </Link>
      </div>
      <div className="hidden md:flex w-[50%]">
        {/*LINKS*/}
        <div className="flex gap-6 text-gray-600">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/home.png" alt="homepage" width={16} height={16} className="w-4 h-4"/>
          <span> Homepage</span>
        </Link>
        <Link href="/"className="flex items-center gap-2">
          <Image src="/friends.png" alt="homepage" width={16} height={16} />
          <span> friends</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/stories.png" alt="homepage" width={16} height={16}/>
          <span> stories</span>
        </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end"> 
        <ClerkLoading>
          <div className= "inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer'>
              <Image src="/people.png" alt="" width={20} height={20}/>
            </div>
            <div className='cursor-pointer'>
              <Image src="/messages.png" alt="" width={20} height={20}/>
            </div>
            <div className='cursor-pointer'>
              <Image src="/notifications.png" alt="" width={20} height={20}/>
            </div>
            <UserButton/>
          </SignedIn>
          <SignedOut>
          <div className="flex items-center gap-2">
            <Image src="/home.png"  alt="" width={20} height={20}/>
            <Link href="/sign-in">Login/Register</Link>
          </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu/>
        </div>
    </div>
  );
};
export default Navbar;
