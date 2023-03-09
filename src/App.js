import style from "./App.module.css"
import Cards from "./components/Cards/Cards"
import SearchBar from './components/SearchBar/SearchBar.jsx'
/* import characters from './data.js' */
import Nav from "./components/Nav/Nav"
import { useState } from "react"

function App() {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    /* const URL_BASE = "https://rickandmortyapi.com/api" */
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const API_KEY = "26929d3a59ee.86b7ab74c93bb6c2634b"
    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID o ya esta seleccionado');
        }
      });
  }

  const onClose = (id) => {
    console.log(characters);
    setCharacters(characters.filter(character => character.id !== id))
  }



  return (
    <div className={style.App}>
      <div >
        {/* <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        /> */}
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards onClose={onClose}
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
