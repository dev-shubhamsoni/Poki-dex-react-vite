import { useContext, useState, useEffect } from "react";
import { PokiApiContext } from "@/context/pokiApi";
import LoadingIcon from './assets/pokeball-icon.png'

import SearchInput from './components/searchInput/searchInput.component'
import LeftComponent from './components/left component/leftComponent.component'
import RightComponent from "./components/right component/rightcomponent.component";
import './App.css'

function App() {
  const { pokemonData, loading } = useContext(PokiApiContext);
  const [searchInput, setSearchInput] = useState('');
  const [rightCompData, setRightCompData] = useState([]);
  console.log('right comp data', rightCompData);
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

  useEffect(() => {
    console.log('evolution array', rcdEvolution);
  }, [rcdEvolution]);

  const search = (e) => {
    setSearchInput(e.target.value)
  }

  const filteredPokemonData = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
  });



  // getting all Data for Right Component..............................

  const gettingDataForRightComponent = (id, name) => {


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


    console.log('url1', urlPokemon1, finUrlPokemon1);
    console.log('url2', urlPokemon2, finUrlPokemon2);
    console.log('url3', urlPokemon3, finUrlPokemon3);
    console.log('url1 pokemon', urlPokemon1);



    evoArray.push(
      {'minLevel' : minLevel}, 
      {'maxLevel' :maxLevel}, 
      {'evolutionBase' :finUrlPokemon1}, 
      {'evolutionMid' :finUrlPokemon2}, 
      {'evolutionFinal' :finUrlPokemon3}
      );



    setRcdEvolution(evoArray);
   


  }


  return (
    <div className=' pt-14 bg-[#f6f8fc] pb-[22rem] '>

      {loading ? (
        <div className="h-screen flex align-middle justify-center">
          <img src={LoadingIcon} alt="Loading" className=' h-28 w-28 mt-56 animate-spin' />
        </div>
      ) : (
        // Render your components when loading is false
        <>
          <div className='searchArea flex items-center justify-left h-1/5 w-screen'>
            <SearchInput search={search} />
          </div>

          <div className='wholeBottomComponent flex h-4/5 w-screen pt-14 '>

            <div className='leftComponent w-2/3 grid grid-cols-3 gap-y-14 gap-x-0 pl-10 mx-5 mt-5'>

              {filteredPokemonData.map((pokemon) => {
                const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return (
                  <LeftComponent gettingDataForRightComponent={gettingDataForRightComponent} key={pokemon.id} id={pokemon.id} name={capitalizedName} types={pokemon.types} />
                );
              })}

            </div>
            <div className='allData overflow-y-scroll h-[37rem]  rightComponent w-[26rem] bg-white rounded-3xl -mt-20 sticky top-20 flex items-center flex-col'>
              <RightComponent evolutionArray = {rcdEvolution} allStats={rcdStats} rcdHeight={rcdHeight} rcdWeight={rcdWeight} rcdDescription={rcdDescription} rcdName={rcdName} rightCompData={rightCompData.types} rcdAbility={rcdAbility} rcdTypes={rcdTypes} rcdId={rcdId} rcdImage={rcdImage} />
            </div>
          </div>
        </>
      )}

    </div>

  )
}

export default App
