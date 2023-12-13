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

  const search = (e) => {
    setSearchInput(e.target.value)
  }

  const filteredPokemonData = pokemonData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
  });

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
                  <LeftComponent key={pokemon.id} id={pokemon.id} name={capitalizedName} types={pokemon.types} />
                );
              })}

            </div>
            <div className='allData overflow-y-scroll h-[37rem]  rightComponent w-[26rem] bg-white rounded-3xl -mt-20 sticky top-20 flex items-center flex-col'>
              <RightComponent  />
            </div>
          </div>
        </>
      )}

    </div>

  )
}

export default App
