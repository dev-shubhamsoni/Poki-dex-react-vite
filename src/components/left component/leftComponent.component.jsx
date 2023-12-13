const LeftComponent = ({ id, name, types, gettingDataForRightComponent }) => {

    
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`


    return (
        <div onClick = {() => gettingDataForRightComponent(id, name)} className="h-36 w-72 mx-3 border-0 hover:border-2 cursor-pointer bg-white rounded-3xl
         group">

            <img className=" -mt-12 ml-24 -mb-1 group-hover:scale-110 transition-transform duration-200"
                src={imgUrl} />
            <p className=" text-xs text-[#8F9396] font-bold font-outfit pb-2">N°{id}</p>
            <h3 className="font-outfit text-base font-black">{name}</h3>
            
            {types ? (
                <div className="types pt-3">
                    {types.map((type, i) => (
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
                        
            ) : (
                <p>Loading types...</p>
            )}


        </div>
    )
};

export default LeftComponent;