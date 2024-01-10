import { useContext } from "react";

import { RightComponentContext } from "@/context/rightComponent.context";

const Abilities = () => {

    const { rcdAbility } = useContext(RightComponentContext);

    return (
        <>

            {rcdAbility.map((ability, i) => {
                return (
                    <div key={i} className="w-[30vw] h-[5vh] rounded-3xl mx-2 bg-[#f6f8fc] flex justify-center items-center
                    
                    sm:w-[20vw]
                    lg:w-[10vw]
                    ">
                        <p className="font-outfit  font-medium text-[16px]  ">{ability.charAt(0).toUpperCase() + ability.slice(1)}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Abilities;