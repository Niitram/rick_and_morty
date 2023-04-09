import style from "./App.module.css"
import Nav from "./components/Nav/Nav"
import { useState, useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from "./Views/About/About"
import Details from "./Views/Detail/Details"
import NotFound from "./Views/NotFound/NotFound"
import Formulario from "./Views/Form/Formulario"
import Favorites from "./Views/Favorites/Favorites"
import Home from "./Views/Home/Home"
import { useSelector } from "react-redux"

function App() {
  const locationNow = useLocation()
  /* logica de login */
  const userState = useSelector((state) => state.userState)
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  /* const username = "tuki@gmail.com"
  const password = "asd1asd" */

  const login = () => {
    if (userState) {
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
          locationNow.pathname !== "/" && <Nav />
        }
      </div>
      <Routes>
        <Route path="/" element={<Formulario login={login} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
