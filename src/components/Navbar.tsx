import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

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
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end"> 
        <MobileMenu/>
        </div>
    </div>
  );
};
export default Navbar;
