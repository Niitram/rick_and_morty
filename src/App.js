import style from "./App.module.css"
import Cards from "./components/Cards/Cards"
import Nav from "./components/Nav/Nav"
import { useState, useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./Views/About/About"
import Details from "./Views/Detail/Details"
import NotFound from "./Views/NotFound/NotFound"
import Formulario from "./Views/Form/Formulario"
import Favorites from "./Views/Favorites/Favorites"

function App() {

  const [characters, setCharacters] = useState([])

  const locationNow = useLocation()

  const onSearch = (id) => {
    /* const URL_BASE = "https://rickandmortyapi.com/api" */
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const API_KEY = "26929d3a59ee.86b7ab74c93bb6c2634b"

    if (characters.find((char) => char.id === id)) {
      return alert("no encontrado o repetido")
    }

    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID o ya esta seleccionado');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }
  /* logica de login */
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  const username = "tuki@gmail.com"
  const password = "asd1asd"

  const login = (_userData_) => {
    if (_userData_.password === password && _userData_.email === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);



  return (
    <div className={style.App}>
      <div >
        {
          locationNow.pathname !== "/" && <Nav onSearch={onSearch} />
        }
      </div>
      <Routes>
        <Route path="/" element={<Formulario login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
