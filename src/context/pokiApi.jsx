import { createContext, useState, useEffect } from "react";
import axios from "axios";

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
                // setLoading(false);
                
                    setLoading(false);
                
            });


        };

        fetchPokemonData();
    }, []);


    const value = { pokemonData, loading, setLoading };

    return <PokiApiContext.Provider value={value}>{children}</PokiApiContext.Provider>;
};
