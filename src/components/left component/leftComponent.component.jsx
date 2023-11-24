const LeftComponent = ({id, name}) => {

    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`
    
    return (
        <div className="h-36 w-72 mx-3 border-2 cursor-pointer bg-white rounded-3xl">

            <img className=" -mt-12 ml-24 -mb-1 "
                src = {imgUrl} />
            <p className=" text-xs text-[#8F9396] font-bold font-outfit pb-2">N°{id}</p>
            <h3 className="font-outfit text-base font-black">{name}</h3>
            <div className="types pt-3">
                <span className="font-outfit">Posion</span>
                <span>Grass</span>

            </div>

        </div>
    )
};

export default LeftComponent;