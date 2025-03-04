import NavBar from "../NavBar/NavBar";
import James from '../../assets/images/James Spader.png'
import Food from "../../assets/images/HomeMadeBeef.png"
import DevIcon from '../../assets/images/DevIcon.png'
import {Cog6ToothIcon , ArrowRightIcon} from "@heroicons/react/24/solid";
import FavorCard from "../FavoritesCard/FavorCard";
export default function Acount(){
    return(
        <>
        <div className="w-full py-4 px-4">
            {/* Account title */}
        <div className="flex Sofia-Bold text-2xl mb-[34px] justify-between">
            <div className="w-2 h-2"></div>
            <h1>Account</h1>
            <button>
                <Cog6ToothIcon className="w-6 transition-colors hover:text-[#4D8194] h-6"/>
            </button>
        </div>
        {/* Developer Shown */}
        <div className="flex CardShadow w-full dev-border rounded-2xl p-4 items-center h-[80px] justify-between">
            <div className=" flex gap-x-4">
                <img src={DevIcon} alt=""/>
                <div className="flex flex-col">
                    <h4 className="text-[18px] Sofia-Bold">Alena Sabyan</h4>
                    <p className="text-[14px] Sofia-Regular">Recipe Developer</p>
                </div>
            </div>
            <div>
                <button className="w-7 h-7 rounded-lg bg-black flex items-center justify-center transition-colors hover:text-black hover:bg-[#4D8194] text-white">
                    <ArrowRightIcon className="w-4 h-4"/>
                </button>
            </div>
        </div>
        {/* My Favorites */}
        <div className="w-full mt-6 flex flex-col">
            {/* First title */}
            <div className="flex justify-between">
            <h2 className="text-[20px] Sofia-Bold">My Favorites</h2>
            <button className="Sofia-Regular text-[14px]">See All</button>
            </div>
            {/* Favor Card Items */}
            <FavorCard img={Food} food={`Easy homemade beef burger`} name={`Agnes`} userImg={James} />
        </div>
        <NavBar/>
        </div>
        </>
    )
}