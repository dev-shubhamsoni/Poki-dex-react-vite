import { useContext } from "react";

import { RightComponentContext } from "@/context/rightComponent.context";

const Types = () => {

    const { rcdTypes } = useContext(RightComponentContext);

    return (
        <>

            {rcdTypes.map((type, i) => (
                <span key={i}
                    className={`text-sm font-outfit border-0 mx-1 rounded-xl px-3 py-1 
                            ${type === 'Normal' ? "bg-[#BCBCAC]" :
                            type === 'Fighting' ? "bg-[#BC5442]" :
                                type === 'Flying' ? "bg-[#669AFF]" :
                                    type === 'Poison' ? "bg-[#AB549A]" :
                                        type === 'Ground' ? "bg-[#DEBC54]" :
                                            type === 'Rock' ? "bg-[#BCAC66]" :
                                                type === 'Bug' ? "bg-[#ABBC1C]" :
                                                    type === 'Ghost' ? "bg-[#6666BC]" :
                                                        type === 'Steel' ? "bg-[#ABACBC]" :
                                                            type === 'Fire' ? "bg-[#FF421C]" :
                                                                type === 'Water' ? "bg-[#2F9AFF]" :
                                                                    type === 'Grass' ? "bg-[#78CD54]" :
                                                                        type === 'Psychic' ? "bg-[#FF549A]" :
                                                                            type === 'Ice' ? "bg-[#78DEFF]" :
                                                                                type === 'Dragon' ? "bg-[#7866EF]" :
                                                                                    type === 'Dark' ? "bg-[#785442]" :
                                                                                        type === 'Fairy' ? "bg-[#FFACFF]" :
                                                                                            type === 'Shadow' ? "bg-[#0E2E4C]" :
                                                                                                type === 'Electric' ? "bg-[#f9d976]" :
                                                                                                    'bg-white'}
                            
                            
                            
                            `}>
                    {type}
                </span>
            ))}

        </>
    )
};

export default Types;