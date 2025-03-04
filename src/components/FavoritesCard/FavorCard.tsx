interface Props{
    img : string,
    food : string,
    name : string,
    userImg : string
}
export default function FavorCard(prop : Props){
    return(
        <>
        <div className="w-[156px] p-3 h-[198px] flex flex-col gap-y-[11px] rounded-2xl CardShadow">
            <div>
                <img className="w-[132px] h-[88px] rounded-2xl " src={prop.img} alt="" />
            </div>
            <div>
                <h3 className="text-base font-Sofia Bold">{prop.food}</h3>
            </div>
            <div className="flex gap-x-1">
                <img className="w-5 h-5" src={prop.userImg} alt="" />
                <p className="text-sm text-[#97A2B0]">{prop.name}</p>
            </div>
        </div>
        </>
    )
}