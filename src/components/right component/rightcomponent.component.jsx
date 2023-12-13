import { useContext } from "react";
import { RightComponentContext } from "@/context/rightComponent.context";

import Types from "./types/types.component";
import Abilities from "./abilities/abilities.component";
import Stats from "./stats/stats.component";
import Evolution from "./evolution/evolution.component";

const RightComponent = () => {

    const { rcdImage, rcdId, rcdName, rcdDescription, rcdHeight, rcdWeight } = useContext(RightComponentContext);

    console.log('image context', rcdImage);

    return (
        <>
            

            <div className=" pt-5">
                <p className=" text-xs text-[#8F9396] font-bold font-outfit pb-2">N°{rcdId}</p>

                {/* Heading */}
                <h3 className="font-outfit text-2xl font-semibold text-[1.5em]">{rcdName}</h3>

                {/* types */}
                <div className="types pt-3">
                    <Types />
                </div>

                {/* Description */}

                <div className=" mt-6">
                    <h3 className="font-outfit text-2xl font-bold text-[16px]">Pokidex Entry</h3>

                    <p className=" font-outfit font-medium leading-5 mt-3 text-[#8F9396] text-base px-5">{rcdDescription}</p>
                </div>

                {/* Height and Weight */}

                <div className="flex items-center justify-center mt-4">
                    <div>
                        <h3 className="font-outfit text-2xl font-bold text-[16px]">Height</h3>
                        <p className="font-outfit text-2xl font-medium text-[16px] bg-[#f6f8fc] px-14 mx-2 rounded-3xl">{`${rcdHeight}m`}</p>
                    </div>
                    <div>
                        <h3 className="font-outfit text-2xl font-bold text-[16px]">Weight</h3>
                        <p className="font-outfit text-2xl font-medium text-[16px] bg-[#f6f8fc] px-14 mx-2 rounded-3xl">{`${rcdWeight}kg`}</p>
                    </div>
                </div>

                {/* Abilities */}

                <div className="flex items-center justify-center mt-4 flex-col">
                    <h3 className="font-outfit text-2xl font-bold text-[16px]">Abilities</h3>

                    <div className="flex pt-2">

                        <Abilities />

                    </div>
                </div>

                {/* Stats */}

                <h3 className="font-outfit text-2xl font-bold text-[16px] pt-5">Stats</h3>

                <div className="stats flex justify-center pt-4">

                    <Stats />

                </div>

                {/* Evolution */}

                <div className="stats flex justify-center pt-2 flex-col">

                    <Evolution />

                </div>
            </div>

        </>
    )
};

export default RightComponent;