import SearchInput from './components/searchInput/searchInput.component'
import './App.css'

function App() {

  /*
  
  [
    {
      image: url,
      id: 1,
      name: pikachu,
      type: ''
    }
  ]

  */

  return (
    <div className=' h-screen'>

      <div className='searchArea flex items-center justify-center h-1/5 w-screen '>
        <SearchInput />
      </div>

      <div className='wholeBottomComponent flex bg-slate-900 h-4/5 w-screen'>

        <div className='leftComponent h-auto w-2/3 bg-white'>
          <p>sfg</p>
        </div>

        <div className='rightComponent h-auto w-1/3 bg-red-400'>
          <p>sfg</p>
        </div>
      </div>

    </div>

  )
}

export default App
