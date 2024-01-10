import { useContext } from "react";
import { RightComponentContext } from "@/context/rightComponent.context";

const Stats = () => {

    const { rcdStats } = useContext(RightComponentContext);

    return (
        <>

            <div className=" bg-[#f6f8fc] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center">
                <p className=" bg-[#cd3845] rounded-full px-1 py-1 text-xs text-white">HP</p>
                <p className=" text-sm pt-1">{rcdStats[0] ? rcdStats[0] : 0}</p>
            </div>

            <div className=" bg-[#f6f8fc] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center
            lg:max-xl:px-[0.3vw]
            ">
                <p className=" bg-[#f19e5c] rounded-full px-1 py-1 text-xs text-white">ATK</p>
                <p className=" text-sm pt-1">{rcdStats[1] ? rcdStats[1] : 0}</p>
            </div>

            <div className=" bg-[#f6f8fc] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center
            lg:max-xl:px-[0.3vw]
            ">
                <p className=" bg-[#e9ce5a] rounded-full px-1 py-1 text-xs text-white">DEF</p>
                <p className=" text-sm pt-1">{rcdStats[2] ? rcdStats[2] : 0}</p>
            </div>

            <div className=" bg-[#f6f8fc] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center
            lg:max-xl:px-[0.3vw]
            ">
                <p className=" bg-[#9adbfb] rounded-full px-1 py-1 text-xs text-white">SpA</p>
                <p className=" text-sm pt-1">{rcdStats[3] ? rcdStats[3] : 0}</p>
            </div>

            <div className=" bg-[#f6f8fc] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center
            lg:max-xl:px-[0.3vw]
            ">
                <p className=" bg-[#a5d88c] rounded-full px-1 py-1 text-xs text-white">SpD</p>
                <p className=" text-sm pt-1">{rcdStats[4] ? rcdStats[4] : 0}</p>
            </div>

            <div className=" bg-[#f6f8fc] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center
            lg:max-xl:px-[0.3vw]
            ">
                <p className=" bg-[#ed99a9] rounded-full px-1 py-1 text-xs text-white">SPD</p>
                <p className=" text-sm pt-1">{rcdStats[5] ? rcdStats[5] : 0}</p>
            </div>

            <div className=" bg-[#8fa9e5] h-[4.5rem] px-[0.5rem] rounded-3xl font-bold flex flex-col justify-center
            lg:max-xl:px-[0.3vw]
            ">
                <p className=" bg-[#7894d7] rounded-full px-1 py-1 text-xs text-white">TOT</p>
                <p className=" text-sm pt-1">{rcdStats.reduce((acc, number) => {
                    return acc + number;
                }, 0)}</p>
            </div>

        </>
    )
}

export default Stats;