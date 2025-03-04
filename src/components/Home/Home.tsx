import { ShoppingCartIcon, SunIcon} from "@heroicons/react/24/solid";
import FeaturedCard from "../Featured Card/FeaturedCard";
import Resipes from "../Recepies/Resipes";
import Taco from '../../assets/images/Taco Salad.png'
import Japan from '../../assets/images/Japanese-style.png'
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
export default function Home() {
  return (
    <>
      {/* Home page */}
      <div className="px-6 md:px-12 gap-y-6 flex flex-col  w-full">
        {/* Good Morning */}
        <div className="flex justify-between mt-3 items-center">
          <div className="flex flex-col  gap-y-0">
            <span className="flex items-center gap-x-1">
              <SunIcon className="w-5 h-5 text-[#4D8194]" />
              <p className="text-[14px] Sofia-Regular">Good Morning</p>
            </span>
            <p className="Sofia-Bold text-2xl">Alena Sabyan</p>
          </div>
          <div>
            <Link to={'/acount'}>
            <button >
              <ShoppingCartIcon className="w-6 h-6 transition-all hover:mb-4 hover:text-[#88C3C6] md:w-8 md:h-8" />
            </button>
            </Link>
          </div>
        </div>
        {/* Featured */}
        <div className="flex flex-col gap-y-3">
            <h2 className="Sofia-Bold text-[20px]">Featured</h2>
            {/* Featured Items */}
            <div className="flex scrollbar p-2 gap-x-4 overflow-x-scroll md:overflow-hidden">
            <FeaturedCard/>
            <div className="">
            <FeaturedCard/>
            </div>
            </div>
        </div>
        {/* Category */}
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between items-center">
                <h3 className="Sofia-Bold text-[20px]">Category</h3>
                <button className="text-sm Sofia-Bold text-[#88C3C6]">See All</button>
            </div>
            <div className="flex p-2 sm:overflow-hidden scrollbar  gap-x-3 overflow-x-scroll">
                <button className=" py-[9px] px-6 rounded-[40px] transition-colors hover:text-white w-[120px] bg-[#F1F5F5] h-[40px] hover:bg-[#88C3C6]">Breakfast</button>
                <button className=" py-[9px] px-6 rounded-[40px] transition-colors hover:text-white w-[120px] bg-[#F1F5F5] h-[40px] hover:bg-[#88C3C6]">Lunch</button>
                <button className=" py-[9px] px-6 rounded-[40px] transition-colors hover:text-white w-[120px] bg-[#F1F5F5] h-[40px] hover:bg-[#88C3C6]">Dinner</button>
                <button className=" py-[9px] px-6 rounded-[40px] transition-colors hover:text-white w-[120px] bg-[#F1F5F5] h-[40px] hover:bg-[#88C3C6]">Snack</button>
            </div>
        </div>
        {/* Popular Recipes */}
        <div className="flex flex-col mb-20 gap-y-3">
            <div className="flex justify-between items-center">
                <h3 className="Sofia-Bold text-[20px]">Popular Recipes</h3>
                <button className="text-sm Sofia-Bold text-[#88C3C6]">See All</button>
            </div>
            <div className="flex  gap-x-3 scrollbar overflow-x-scroll">
                    <Resipes img={Taco} title={`Healthy Taco Salad with fresh vegetable`}/>
                    <Resipes img={Japan} title={`Japanese-style Pancakes Recipe`}/>
            </div>
        </div>
        <NavBar/>
      </div>
    </>
  );
}
