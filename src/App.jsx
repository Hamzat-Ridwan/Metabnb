import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css' 
import Home from './pages/home/Home'
import { ConnectContext } from './context/useConnect'
import Places from './pages/places/Places'
import Connect from './components/connect/Connect'

function App() {
  const [showConnect, setShowConnect] = useState(false)
  return (
    <BrowserRouter>
      <ConnectContext.Provider value={{showConnect, setShowConnect}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/places' element={<Places />} />
      </Routes>
      <Connect />
      </ConnectContext.Provider>
    </BrowserRouter>
  )
}

export default App
