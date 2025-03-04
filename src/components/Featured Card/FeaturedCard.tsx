import {ClockIcon } from "@heroicons/react/24/solid";
import James from '../../assets/images/James Spader.png'

export default function FeaturedCard(){
    return(
        <>
        <div className="w-[320px] min-w-[320px] flex flex-col justify-center px-[16px] background gap-x- h-[230px] rounded-2xl bg-[#4D8194]">
                <div className="flex mt-16 flex-col">
                    <h4 className="text-white Sofia-Bold text-[20px]">Asian white noodle <br /> with extra seafood</h4>
                    <div className="flex items-center mt-10 justify-between">
                        <div className="flex mt-2 gap-x-2">
                            <img src={James} alt="" />
                            <p className="text-white Sofia-Regular">James Spader</p>
                        </div>
                        <div className="flex Sofia-Regular items-center gap-x-1">
                            <ClockIcon className="w-4 text-white h-4"/>
                            <p className="text-white text-[14px]">20 Min</p>
                        </div>
                    </div>
                </div>                
            </div>              
        </>
    )
}