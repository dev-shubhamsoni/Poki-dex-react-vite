import { useContext, useState, useEffect } from "react";
import { PokiApiContext } from "@/context/pokiApi";
import { RightComponentContext } from "@/context/rightComponent.context";
import LoadingIcon from './assets/pokeball-icon.png'
import NoPokemonImage from './assets/no-pokemon-selected-image.png'
import 'animate.css';
import SearchInput from './components/searchInput/searchInput.component'
import LeftComponent from './components/left component/leftComponent.component'
import RightComponent from "./components/right component/rightcomponent.component";
import './App.css'

function App() {

  const { pokemonData, loading } = useContext(PokiApiContext);
  const { rcdImage, intialLoading, rcdIconLoading } = useContext(RightComponentContext);
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

        <>
          <div className='searchArea flex items-center justify-left h-1/5 w-screen'>
            <SearchInput search={search} />
          </div>

          <div className='wholeBottomComponent flex h-4/5 w-screen pt-14 '>

            {/* left component */}

            <div className='leftComponent w-2/3 grid grid-cols-3 gap-y-14 gap-x-0 pl-10 mx-5 mt-5'>

              {filteredPokemonData.map((pokemon) => {
                const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return (
                  <LeftComponent key={pokemon.id} id={pokemon.id} name={capitalizedName} types={pokemon.types} />
                );
              })}

            </div>

            {/* Right Component */}

            {intialLoading ? (
              <div className=" WholeRightComponent flex flex-col sticky top-10 h-[40rem] -mt-[8rem]">

                <div className="flex justify-center z-10 "><img src={NoPokemonImage} alt="No-Pokemon" className="pokiImageRc h-[9rem] w-[7rem]" /></div>
                <div className="h-[5rem] w-[26rem] bg-white -mt-10 rounded-t-3xl"></div>

                <div className='allData h-[37rem] w-[26rem] bg-white flex justify-center items-center flex-col rounded-b-3xl'>
                  <p className="font-outfit text-base font-bold text-[#95989a]">Select a Pokemon
                    to display here.</p>
                </div>

              </div>
            ) : (

              rcdIconLoading ? (

                <div className="h-screen flex align-middle justify-center">
                  <img src={LoadingIcon} alt="Loading" className=' h-28 w-28 mt-56 animate-spin' />
                </div>

              ) : (
                <div className={` animate__animated animate__fadeInRight ${rcdIconLoading ? 'animate__fadeOutRight__faster' : 'animate__fadeInRight'}
                 WholeRightComponent flex flex-col sticky top-10 h-[40rem] -mt-[8rem]`}>

                  <div className="flex justify-center z-10 "><img src={`${rcdImage}`} alt="pokemon" className="pokiImageRc h-[8rem] w-[10rem]" /></div>
                  <div className="h-[5rem] w-[26rem] bg-white -mt-10 rounded-t-3xl"></div>

                  <div className='allData overflow-y-scroll h-[37rem] w-[26rem] bg-white  flex items-center flex-col rounded-b-3xl'>
                    <RightComponent />
                  </div>

                </div>
              )


            )}





          </div>
        </>
      )}

    </div>

  )
}

export default App
