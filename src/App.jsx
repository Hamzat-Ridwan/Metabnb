import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css' 
import Home from './pages/home/Home'
import { ConnectContext } from './context/useConnect'
import Places from './pages/places/Places'

function App() {
  const [showConnect, setShowConnect] = useState(false)
  return (
    <BrowserRouter>
      <ConnectContext.Provider value={{showConnect, setShowConnect}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/places' element={<Places />} />
      </Routes>
      </ConnectContext.Provider>
    </BrowserRouter>
  )
}

export default App
