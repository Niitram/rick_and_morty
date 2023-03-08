import style from "./App.module.css"
import Cards from "./components/Cards/Cards"
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'

function App() {
  return (
    <div className={style.App}>
      <div className={style.containerSearch}>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
