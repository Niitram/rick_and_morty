import React from 'react'
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from 'react-router-dom'
import About from '../../Views/About/About'
import Home from "../../Views/Home/Home"

function Nav({onSearch}) {
    return (
      <nav className={styles.Nav}>
        <NavLink to={"/home"}>
          <Home></Home>
        </NavLink>
        <NavLink to={"/about"}>
          <About></About>
        </NavLink>
        <SearchBar onSearch={onSearch}/>
      </nav>
      
    )
}

export default Nav