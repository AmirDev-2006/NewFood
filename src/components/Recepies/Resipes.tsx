interface RecepiesProps {
    img:string;
    title:string;
}
export default function Resipes(props:RecepiesProps){
    return(
        <>
        <div className="flex CardShadow gap-y-3 flex-col w-[200px] h-[240px] rounded-2xl p-4">
            <img className="w-[168px] h-[128px] rounded-3xl " src={props.img} alt="" />
            <div className="flex flex-col items-center gap-y-2 w-[168px] h-[68px]">
                <h4 className="text-base Sofia-Bold">{props.title}</h4>
                <button className=" py-[6px] text-sm px-4 flex justify-center items-center rounded-[40px] transition-colors hover:text-white w-[120px] bg-[#F1F5F5] h-[25px] hover:bg-[#88C3C6]  Sofia-Regular">Add to box</button>
            </div>
        </div>
        </>
    )
}