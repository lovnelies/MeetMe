"use client"

import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=""> 
            <div
  className="flex flex-col gap-[4.5px] cursor-pointer"
  onClick={() => setIsOpen((prev) => !prev)}
>
  <div className="w-6 h-1 bg-blue-500 rounded-md" />
  <div className="w-6 h-1 bg-blue-500 rounded-md" />
  <div className="w-6 h-1 bg-blue-500 rounded-md" />
</div>

            {isOpen && (
           <div
           className="absolute left-0 top-24 w-full bg-white"
           style={{ height: "calc(100vh - 96px)" }}
         >
         
                <ul className="flex flex-col gap-4">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer">About</li>
                    <li className="hover:text-blue-500 cursor-pointer">Services</li>
                    <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                </ul>
            </div>
        )
        }
        </div>
        
    );
}
export default MobileMenu;