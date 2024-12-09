import  PokeCard  from "./components/PokeCard"
import  Header  from "./components/Header"
import  SideNav  from "./components/SideNav"

import { useState } from "react"

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowsSideMenu] = useState(true)

  function handleToggleMenu(){
    setShowsSideMenu(!showSideMenu)
  }
  function handleCloseMenu(){
    setShowsSideMenu(true)
  }
  return (
    <>
    <Header handleToggleMenu={handleToggleMenu}/>
    <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} handleCloseMenu={handleCloseMenu}
     showSideMenu={showSideMenu}/>
    <PokeCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
