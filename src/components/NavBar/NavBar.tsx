import {HomeIcon , UserIcon , MagnifyingGlassIcon , BellIcon  } from "@heroicons/react/24/solid";
import chef1 from '../../assets/images/chef1.png'
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
        <div className="w-full h-[80px] navbar justify-around md:hidden flex  items-center px-6 py-[13px] fixed bg-white rounded-t-xl text-[#88C3C6] bottom-0 right-0 left-0 ">
            <Link to={'/'}>
            <button className="transition-all hover:mb-5">
            <HomeIcon className="w-8 h-8"/>
            </button>
            </Link>
            <Link to={'/search'}>
            <button className="transition-all hover:mb-5">
            <MagnifyingGlassIcon className="w-8 h-8"/>
            </button>
            </Link>
            <button className="w-[56px] rounded-full transition-all hover:mb-4 bottom-14 absolute flex justify-center items-center h-[56px] bg-[#042628]">
                <img src={chef1} className="" alt="" />
            </button>
            <button className="transition-all hover:mb-5">
            <BellIcon className="w-8 h-8"/>
            </button>
            <Link to={'/acount'}>
            <button className="transition-all hover:mb-5">
            <UserIcon className="w-8 h-8"/>
            </button>
            </Link>
        </div>
        </>
    )
}