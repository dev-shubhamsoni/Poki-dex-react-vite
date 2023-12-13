import { createContext, useState, useEffect } from "react";
import axios, { all } from "axios";

export const PokiApiContext = createContext({});

export const PokiApiProvider = ({ children }) => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=898');
            const pokemonNames = response.data.results.map((pokemon, id) => ({ id: id + 1, name: pokemon.name }));
            setPokemonData(pokemonNames);

            // Fetch additional details for each Pokemon
            const pokemonPromises = pokemonNames.map((pokemon) => {
                return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
            });

            Promise.all(pokemonPromises).then((responses) => {
                const enhancedPokemonData = pokemonNames.map((pokemon, index) => {
                    const pokemonDetails = responses[index].data;
                    const types = pokemonDetails.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1));
                    const height = pokemonDetails.height;
                    const weight = pokemonDetails.weight;
                    const ability = pokemonDetails.abilities.map((ability) => ability.ability.name);
                    const stats = pokemonDetails.stats.map((stat) => stat.base_stat);
                    return { ...pokemon, types, height, weight, ability, stats };
                });
                setPokemonData(enhancedPokemonData);
                setLoading(false);
                // setTimeout(() => {
                //     setLoading(false);
                // }, 1000);
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


    const value = { pokemonData, loading };

    return <PokiApiContext.Provider value={value}>{children}</PokiApiContext.Provider>;
};
