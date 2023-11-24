import { useContext } from "react";
import { PokiApiContext } from "@/context/pokiApi";


const LeftComponent = ({ id, name, types }) => {

    const { colors } = useContext(PokiApiContext)
    // console.log('we are' ,colors['grass']);

    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`

    // const getTypeClassName = (type) => {
    //     switch (type) {
    //       case 'normal':
    //         return `bg-[${colors[0].normal}]`;
    //       case 'fighting':
    //         return `bg-[${colors[1].fighting}]`;
    //       case 'flying':
    //         return `bg-[${colors[2].flying}]`;
    //       case 'poison':
    //         return `bg-[${colors[3].poison}]`;
    //       case 'ground':
    //         return `bg-[${colors[4].ground}]`;
    //       case 'rock':
    //         return `bg-[${colors[5].rock}]`;
    //       case 'bug':
    //         return `bg-[${colors[6].bug}]`;
    //       case 'ghost':
    //         return `bg-[${colors[7].ghost}]`;
    //       case 'steel':
    //         return `bg-[${colors[8].steel}]`;
    //       case 'fire':
    //         return `bg-[${colors[9].fire}]`;
    //       case 'water':
    //         return `bg-[${colors[10].water}]`;
    //       case 'grass':
    //         return `bg-[${colors[11].grass}]`;
    //       case 'psychic':
    //         return `bg-[${colors[12].psychic}]`;
    //       case 'ice':
    //         return `bg-[${colors[13].ice}]`;
    //       case 'dragon':
    //         return `bg-[${colors[14].dragon}]`;
    //       case 'dark':
    //         return `bg-[${colors[15].dark}]`;
    //       case 'fairy':
    //         return `bg-[${colors[16].fairy}]`;
    //       case 'shadow':
    //         return `bg-[${colors[17].shadow}]`;
    //       default:
    //         // Return a distinct class for unknown types
    //         return `bg-[${colors[18].unknown}]`; // Assuming you have a color for unknown types
    //     }
    //   };



    return (
        <div className="h-36 w-72 mx-3 border-2 cursor-pointer bg-white rounded-3xl">

            <img className=" -mt-12 ml-24 -mb-1 "
                src={imgUrl} />
            <p className=" text-xs text-[#8F9396] font-bold font-outfit pb-2">N°{id}</p>
            <h3 className="font-outfit text-base font-black">{name}</h3>

            {types ? (
                <div className="types pt-3">
                    {types.map((type, i) => (
                        <span key={i}
                            className={`text-sm font-outfit border-2 mx-1 rounded-xl px-3 py-1}`}>
                            {type}
                        </span>
                    ))}
                </div>
            ) : (
                <p>Loading types...</p>
            )}


        </div>
    )
};

export default LeftComponent;