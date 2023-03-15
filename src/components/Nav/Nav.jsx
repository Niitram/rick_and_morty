import React from 'react'
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from 'react-router-dom'
import About from '../../Views/About/About'
import Home from "../../Views/Home/Home"
import RaMSF from "../../assets/imgs/rickandmortysinfondo.png"
import { useSelector } from 'react-redux'


function Nav() {

  const myFavorites = useSelector(state=>state.myFavorites)

    return (
      <nav className={styles.Nav}>
        <div>
          <img className={styles.image} src={RaMSF} alt="" />
        </div>
        <NavLink className={styles.home} to={"/home"}>
          <Home></Home>
        </NavLink>
        {
          myFavorites ?
            <NavLink className={styles.home} to={"/favorites"}>
              <span>Favorites</span>
            </NavLink>
            :
            <span className={styles.disabled}>Favorites</span>
        }
        <NavLink className={styles.home} to={"/"}>
          <span>LogOut</span>
        </NavLink>
        <NavLink className={styles.about} to={"/about"}>
          <About ></About>
        </NavLink>
        <div>
        <SearchBar/>
        </div>
      </nav>
    )
}

export default Nav