import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokiApiProvider } from './context/pokiApi'
import { RightComponentContextProvider } from './context/rightComponent.context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokiApiProvider>
        <RightComponentContextProvider>
          <App />
        </RightComponentContextProvider>
    </PokiApiProvider>
  </React.StrictMode>,
)
