import { createContext, useState, useEffect, useContext } from "react";
import { PokiApiContext } from "@/context/pokiApi";


export const RightComponentContext = createContext({});

export const RightComponentContextProvider = ({ children }) => {

    const { pokemonData } = useContext(PokiApiContext);



    const [rightCompData, setRightCompData] = useState([]);
    console.log('right comp data context', rightCompData);
    const [rcdImage, setRcdImage] = useState('');
    const [rcdId, setRcdId] = useState('');
    const [rcdTypes, setRcdTypes] = useState([]);
    const [rcdAbility, setRcdAbility] = useState([]);
    const [rcdName, setRcdName] = useState('');
    const [rcdDescription, setRcdDescription] = useState('');
    const [rcdHeight, setRcdHeight] = useState('');
    const [rcdWeight, setRcdWeight] = useState('');
    const [rcdStats, setRcdStats] = useState([]);

    const [rcdEvolution, setRcdEvolution] = useState([]);


    const [intialLoading, setInitialLoading] = useState(true);

    const [rcdIconLoading, setRcdIconLoading ] = useState(false);

    useEffect(() => {
        console.log('evolution array context', rcdEvolution);
    }, [rcdEvolution]);


    // Functions Start

    const gettingDataForRightComponent = (id, name) => {

        console.log('context id', id, name);
        const filterData = pokemonData.filter((item, index) => {
            return index === id - 1 ? item : console.error();
        })


        const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + id + '.gif'

        const types = filterData.map((item) => {
            return item.types;
        });

        const ability = filterData.map((item, i) => {

            return item.ability
        });

        const stats = filterData[0].stats;


        const height = filterData[0].height;
        const weight = filterData[0].weight;

        setRightCompData(filterData);
        setRcdImage(imageUrl);
        setRcdId(id);
        setRcdTypes(types[0]);
        setRcdName(name);
        setRcdHeight(height);
        setRcdWeight(weight);
        setRcdAbility(ability[0].slice(0, 2))
        setRcdStats(stats)


        fetchRcdDescription(id);
        evolutionDetails(id);

        setInitialLoading(false);

    }

    const fetchRcdDescription = async (id) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        const description = data.flavor_text_entries[0].flavor_text;
        const cleanDescription = description.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');


        setRcdDescription(cleanDescription)

    }

    const evolutionDetails = async (id) => {

        const evoArray = [];

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        const gettingEcolutionUrl = data.evolution_chain.url;


        const response2 = await fetch(gettingEcolutionUrl);
        const data2 = await response2.json();
        const minLevel = data2.chain?.evolves_to?.[0]?.evolution_details?.[0]?.min_level ?? undefined;
        const maxLevel = data2.chain?.evolves_to?.[0]?.evolves_to?.[0]?.evolution_details?.[0]?.min_level ?? undefined;

        const urlPokemon1 = data2.chain.species.url ? data2.chain.species.url : undefined;
        const finUrlPokemon1 = urlPokemon1 ? urlPokemon1.split("/")[6] : '';

        const urlPokemon2 = data2.chain?.evolves_to?.[0]?.species?.url ?? undefined;
        const finUrlPokemon2 = urlPokemon2 ? urlPokemon2.split("/")[6] : '';

        const urlPokemon3 = data2.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.url ?? undefined;
        const finUrlPokemon3 = urlPokemon3 ? urlPokemon3.split("/")[6] : '';


        evoArray.push(
            { 'minLevel': minLevel },
            { 'maxLevel': maxLevel },
            { 'evolutionBase': finUrlPokemon1 },
            { 'evolutionMid': finUrlPokemon2 },
            { 'evolutionFinal': finUrlPokemon3 }
        );



        setRcdEvolution(evoArray);

        setRcdIconLoading(true);

        setTimeout(() => {
        setRcdIconLoading(false);

            
        }, 4000);



    }



    const value = {
        gettingDataForRightComponent,
        rcdImage,
        rcdId,
        rcdTypes,
        rcdAbility,
        rcdName,
        rcdDescription,
        rcdHeight,
        rcdWeight,
        rcdStats,
        rcdEvolution,
        intialLoading,
        rcdIconLoading
        
    };
    return <RightComponentContext.Provider value={value}>{children}</RightComponentContext.Provider>
}

