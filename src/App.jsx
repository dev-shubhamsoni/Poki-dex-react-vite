import { useContext } from "react";
import { PokiApiContext } from "@/context/pokiApi";


import SearchInput from './components/searchInput/searchInput.component'
import LeftComponent from './components/left component/leftComponent.component'
import './App.css'

function App() {

  const { pokemonData } = useContext(PokiApiContext)
  console.log('we are here', pokemonData);


  return (
    <div className=' pt-14 bg-[#f6f8fc] pb-[22rem]'>

      <div className='searchArea  flex items-center justify-center h-1/5 w-screen '>
        <SearchInput />
      </div>

      <div className='wholeBottomComponent flex h-4/5 w-screen pt-14'>

        <div className='leftComponent w-2/3 grid grid-cols-3 gap-y-14 mx-10 mt-5'>

          {pokemonData.map((pokemon) => {
            const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            return (
              <LeftComponent key={pokemon.id} id={pokemon.id} name={capitalizedName} />
            );
          })}


        </div>
        <div className='rightComponent  w-1/3 bg-red-400'>
          <p>sfg</p>
        </div>
      </div>

    </div>

  )
}

export default App
