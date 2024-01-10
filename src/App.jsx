import { useEffect, useState, useContext } from "react";
import { PokiApiContext } from "@/context/pokiApi";
import { RightComponentContext } from "@/context/rightComponent.context";
import LoadingIcon from './assets/ball-game-poke-sport-sports-svgrepo-com.svg';
import NoPokemonImage from './assets/no-pokemon-selected-image.png';
import SearchInput from './components/searchInput/searchInput.component';
import LeftComponent from './components/left component/leftComponent.component';
import RightComponent from "./components/right component/rightcomponent.component";
import 'animate.css';
import './App.css';

function App() {
  const { pokemonData, loading } = useContext(PokiApiContext);
  const { rcdImage, intialLoading, rcdIconLoading, setInitialLoading } = useContext(RightComponentContext);
  const [searchInput, setSearchInput] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const loadMoreData = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight * 0.8) {
      loadMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const search = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredPokemonData = pokemonData
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
    .slice(0, pageNumber * 10); // Adjust the slice based on how many items you want to display per page

  return (
    <div className='mainApp pt-14 bg-[#f6f8fc] pb-[22rem] '>
      {loading ? (
        <div className="h-screen flex align-middle justify-center">
          <img src={LoadingIcon} alt="Loading" className=' h-28 w-28 mt-56 animate-spin' />
        </div>
      ) : (
        <>
          <div className='searchArea flex items-center justify-left h-[13vh]'>
            <SearchInput search={search} />
          </div>

          <div className='wholeBottomComponent flex h-4/5 w-screen pt-14 '>

            <div className='leftComponent w-[92vw] grid grid-cols-1 gap-y-14 gap-x-0 mx-5 mt-5
            
            sm:max-md:ml-[-2px] sm:max-md:gap-x-5 sm:grid-cols-3 sm:w-[92vw]
            md:max-lg:grid-cols-3
            lg:max-xl:gap-x-2 lg:w-2/3 lg:pl-10
            '>
              {filteredPokemonData.map((pokemon) => {
                const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return (
                  <LeftComponent key={pokemon.id} id={pokemon.id} name={capitalizedName} types={pokemon.types} />
                );
              })}
            </div>

            {intialLoading ? (
              <div className=" WholeRightComponent sticky top-10 h-[40rem] -mt-[8rem] hidden
              
              lg:flex lg:flex-col
              ">

                <div className="flex justify-center z-10 "><img src={NoPokemonImage} alt="No-Pokemon" className="pokiImageRc h-[9rem] w-[7rem]" /></div>
                <div className="h-[5rem] w-[26rem] bg-white -mt-10 rounded-t-3xl
                
                lg:max-xl:w-[28vw] lg:max-xl:mr-[2vw] lg:max-xl:ml-[-2vw] 
                ">

                </div>

                <div className='allData h-[37rem] w-[26rem] bg-white flex justify-center items-center flex-col rounded-b-3xl
                
                lg:max-xl:w-[28vw] lg:max-xl:h-[50vh] lg:max-xl:mr-[2vw] lg:max-xl:ml-[-2vw]
                '>
                  <p className="font-outfit text-base font-bold text-[#95989a]">
                    Select a Pokemon to display here.</p>
                </div>

              </div>
            ) : (
              rcdIconLoading ? (
                <div className="h-[40rem] w-[26rem] sticky top-2 justify-center items-start hidden
                
                lg:max-xl:w-[20vw] lg:flex
                ">
                  <img src={LoadingIcon} alt="Loading" className=' h-28 w-28 mt-56 animate-spin' />
                </div>
              ) : (
                <div className={` absolute animate__animated animate__fadeInRight WholeRightComponent flex flex-col top-[25vh] left-[5vw] h-[85vh] -mt-[8rem]
                  
                  sm:left-[20vw]
                  lg:sticky lg:top-10 lg:left-[35vw]
                  `}>

                  <div className="flex justify-center z-10 ">
                    <img src={`${rcdImage}`} alt="pokemon" className="pokiImageRc h-[6rem] w-[6rem]

                    sm:max-md:h-[7rem] sm:max-md:w-[7rem]
                    md:max-lg:w-[6rem] md:max-lg:h-[6rem]
                    lg:max-xl:w-[12vw] lg:max-xl:h-[12vw] lg:max-xl:pb-2
                  " />

                  <button onClick={() => setInitialLoading(true)} className="absolute border-2 w-[2rem] top-[15%] right-[5%] rounded-md border-red-500
                  
                  lg:hidden
                  ">X</button>
                  </div>

                  <div className="h-[10vh] w-[85vw] bg-white -mt-10 rounded-t-3xl

                  sm:w-[60vw]
                  lg:max-xl:w-[30vw] lg:max-xl:ml-[-4vw] lg:w-[27vw] lg:h-[7vh]
                  "></div>

                  {/* Right Component */}

                  <div className='allData overflow-y-scroll h-[37rem] w-[85vw] bg-white  flex items-center flex-col rounded-b-3xl
                  
                  sm:w-[60vw]
                  lg:w-[27vw]
                  lg:max-xl:w-[30vw] lg:max-xl:ml-[-4vw] 
                  '>
                    <RightComponent />
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;
