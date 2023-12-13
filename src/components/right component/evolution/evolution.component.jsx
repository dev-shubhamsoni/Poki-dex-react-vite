import { useContext } from "react";
import { RightComponentContext } from "@/context/rightComponent.context";

const Evolution = ({ }) => {

    const { rcdEvolution } = useContext(RightComponentContext);
    const minLevel = rcdEvolution[0]?.minLevel;
    const maxLevel = rcdEvolution[1]?.maxLevel;
    const evolutionBase = rcdEvolution[2]?.evolutionBase;
    const evolutionMid = rcdEvolution[3]?.evolutionMid;
    const evolutionFinal = rcdEvolution[4]?.evolutionFinal;

    const imageEvoBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${evolutionBase}.png`
    const imageEvoMid = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${evolutionMid}.png`
    const imageEvoFinal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${evolutionFinal}.png`
    // console.log('in right component', rcdEvolution[0].minLevel);
    return (
        <>
            <h3 className="font-outfit text-2xl font-bold text-[16px] pt-5">Evolution</h3>
            <div className="mainContainer pt-0 flex gap-0 justify-center items-center mb-6">

                {evolutionFinal !== '' ? (
                    // Render content when evolutionFinal is defined
                    <>
                        <div><img src={imageEvoBase} /></div>
                        
                        <div className="bg-[#f6f8fc] h-[2rem] w-[6rem] rounded-xl flex justify-center items-center">

                            {/* <p className=" text-xs font-bold">{`Lv. ${minLevel}`}</p> */}
                            <p className=" text-xs font-bold">{minLevel !== undefined ? `Lv. ${minLevel}` : '?'}</p>


                        </div>

                        <div><img src={imageEvoMid} /></div>
                        
                        <div className="bg-[#f6f8fc] h-[2rem] w-[6rem] rounded-xl flex justify-center items-center">

                            {/* <p className=" text-xs font-bold">{`Lv. ${maxLevel}`}</p> */}
                            <p className=" text-xs font-bold">{maxLevel !== undefined ? `Lv. ${maxLevel}` : '?'}</p>


                        </div>

                        <div><img src={imageEvoFinal} /></div>
                    </>
                ) : (
                    // Render content when evolutionFinal is not defined
                    <>
                        <div><img src={imageEvoBase} /></div>
                        
                        <div className="bg-[#f6f8fc] h-[2rem] w-[6rem] rounded-xl flex justify-center items-center">

                        <p className=" text-xs font-bold">{minLevel !== undefined ? `Lv. ${minLevel}` : '?'}</p>

                        </div>

                        <div><img src={imageEvoMid} /></div>
                        
                        
                    </>
                )}


            </div>
        </>
    )
}

export default Evolution;