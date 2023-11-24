import { createContext, useState, useEffect } from "react";
import axios, { all } from "axios";

export const PokiApiContext = createContext({});

export const PokiApiProvider = ({ children }) => {



    const colors = [
        { 'normal': '#BCBCAC' },
        { 'fighting': '#BC5442' },
        { 'flying': '#669AFF' },
        { 'poison': '#AB549A' },
        { 'ground': '#DEBC54' },
        { 'rock': '#BCAC66' },
        { 'bug': '#ABBC1C' },
        { 'ghost': '#6666BC' },
        { 'steel': '#ABACBC' },
        { 'fire': '#FF421C' },
        { 'water': '#2F9AFF' },
        { 'grass': '#78CD54' },
        { 'psychic': '#FF549A' },
        { 'ice': '#78DEFF' },
        { 'dragon': '#7866EF' },
        { 'dark': '#785442' },
        { 'fairy': '#FFACFF' },
        { 'shadow': '#0E2E4C' },
    ]

    console.log(colors[9].fire);

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898');
          const pokemonNames = response.data.results.map((pokemon, id) => ({id: id+1, name: pokemon.name }));
          setPokemonData(pokemonNames);
    
          // Fetch additional details for each Pokemon
          const pokemonPromises = pokemonNames.map((pokemon) => {
            return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
          });
    
          Promise.all(pokemonPromises).then((responses) => {
            const enhancedPokemonData = pokemonNames.map((pokemon, index)=> {
              const pokemonDetails = responses[index].data;
              const types = pokemonDetails.types.map((type) => type.type.name);
              const height = pokemonDetails.height;
              const weight = pokemonDetails.weight;
              const ability = pokemonDetails.abilities.map((ability) => ability.ability.name);
              const stats = pokemonDetails.stats.map((stat) => stat.base_stat);
              return { ...pokemon, types,height, weight, ability, stats };
            });
            setPokemonData(enhancedPokemonData);
          });

          // fetching description for each pokemon
        //   const descriptionPromises = pokemonNames.map((pokemon) => {
        //     return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
        //   });
          
        //   Promise.all(descriptionPromises).then((responses) => {
        //     const allPokemonData = pokemonNames.map((pokemon, index) => {
        //         const pokemonDetails = responses[index].data;
        //         const description = pokemonDetails.flavor_text_entries[0].flavor_text; // Extracting the first entry
        //         return { ...pokemon, description };
        //     });
        //     setPokemonData(allPokemonData);
        // });
        };
    
        fetchPokemonData();
      }, []);

    console.log(pokemonData);


    // const settingNames = (data) => {
    //     if (!loopRun) {
    //         for (let i = 0; i < data.length; i++) {
    //             setAllData(prevData => [...prevData, { id: i + 1, name: data[i].name }]);
    //         }
    //     }

    //     setLoopRun(true);
    // };



    const value = { colors, pokemonData };

    return <PokiApiContext.Provider value={value}>{children}</PokiApiContext.Provider>;
};
