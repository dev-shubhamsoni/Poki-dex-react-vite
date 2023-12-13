import Evolution from "./evolution/evolution.component";

const RightComponent = ({ evolutionArray, allStats, rcdImage, rcdId, rcdTypes, rcdAbility, rcdName, rcdDescription, rcdHeight, rcdWeight }) => {


    return (
        <>
            <img src={`${rcdImage}`} alt="pokemon" className=" h-[120px] w-[120px]" />

            <div className=" pt-5">
                <p className=" text-xs text-[#8F9396] font-bold font-outfit pb-2">N°{rcdId}</p>

                {/* Heading */}
                <h3 className="font-outfit text-2xl font-semibold text-[1.5em]">{rcdName}</h3>

                {/* types */}
                <div className="types pt-3">
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
                </div>

                {/* Description */}

                <div className=" mt-6">
                    <h3 className="font-outfit text-2xl font-bold text-[16px]">Pokidex Entry</h3>

                    <p className=" font-sans font-medium leading-5 mt-3 text-[#8F9396] text-base px-5">{rcdDescription}</p>
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

                    <div className="flex">

                        {rcdAbility.map((ability, i) => {
                            return (
                                <div key={i} className="px-10 py-2 rounded-3xl mx-2 bg-[#f6f8fc]">
                                    <p className="font-outfit  font-medium text-[16px]  ">{ability.charAt(0).toUpperCase() + ability.slice(1)}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>

                {/* Stats */}

                <h3 className="font-outfit text-2xl font-bold text-[16px] pt-5">Stats</h3>
                <div className="stats flex justify-center pt-2">


                    <div className=" bg-[#f6f8fc] h-[4.5rem]  mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#cd3845] rounded-full px-1 py-1 text-xs text-white">HP</p>
                        <p className=" text-sm pt-1">{allStats[0] ? allStats[0] : 0}</p>
                    </div>

                    <div className=" bg-[#f6f8fc] h-[4.5rem] mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#f19e5c] rounded-full px-1 py-1 text-xs text-white">ATK</p>
                        <p className=" text-sm pt-1">{allStats[1] ? allStats[1] : 0}</p>
                    </div>

                    <div className=" bg-[#f6f8fc] h-[4.5rem] mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#e9ce5a] rounded-full px-1 py-1 text-xs text-white">DEF</p>
                        <p className=" text-sm pt-1">{allStats[2] ? allStats[2] : 0}</p>
                    </div>

                    <div className=" bg-[#f6f8fc] h-[4.5rem] mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#9adbfb] rounded-full px-1 py-1 text-xs text-white">SpA</p>
                        <p className=" text-sm pt-1">{allStats[3] ? allStats[3] : 0}</p>
                    </div>

                    <div className=" bg-[#f6f8fc] h-[4.5rem] mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#a5d88c] rounded-full px-1 py-1 text-xs text-white">SpD</p>
                        <p className=" text-sm pt-1">{allStats[4] ? allStats[4] : 0}</p>
                    </div>

                    <div className=" bg-[#f6f8fc] h-[4.5rem] mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#ed99a9] rounded-full px-1 py-1 text-xs text-white">SPD</p>
                        <p className=" text-sm pt-1">{allStats[5] ? allStats[5] : 0}</p>
                    </div>

                    <div className=" bg-[#8fa9e5] h-[4.5rem] mx-1 px-2 rounded-3xl font-bold flex flex-col justify-center">
                        <p className=" bg-[#7894d7] rounded-full px-1 py-1 text-xs text-white">TOT</p>
                        <p className=" text-sm pt-1">{allStats.reduce((acc, number) => {
                            return acc + number;
                        }, 0)}</p>
                    </div>



                </div>

                {/* Evolution */}

                <div className="stats flex justify-center pt-2">

                    <Evolution />


                </div>



            </div>

        </>
    )
};

export default RightComponent;