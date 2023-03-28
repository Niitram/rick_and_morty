import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import styles from "./Favorites.module.css"
import { orderCards , filterCards } from '../../redux/actions'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Favorites() {

    const myFavorites = useSelector((state)=>state.myFavorites)
    const dispatch = useDispatch()
    const locationNow = useLocation()
    useEffect(() => {
    
        return () => {
            dispatch(filterCards("SELECT_ALL"))
        }
    }, [locationNow.pathname])
    
    const handleOrder =(e)=>{
        dispatch(orderCards(e.target.value))
    }
    const handleFilter =(e)=>{
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={styles.container}>
            <div>
                <select onChange={handleOrder} name="ORDER" id="">
                    <option value="ASCENDENTE">Ascendente</option>
                    <option value="DESCENDENTE">Descendente</option>
                </select>
                <select onChange={handleFilter} name="FILTER" id="">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value="SELECT_ALL">All</option>
                </select>
            </div>
            <div className={styles.containerCards}>
                {console.log("Renderizando")}
                {myFavorites.map(({name,
                            species,
                            gender,
                            image,
                            id
                        })=>{
                            return <Card
                                key={id}
                                name={name}
                                species={species}
                                gender={gender}
                                image={image}
                                id={id}
                            />})}
            </div>
        </div>
    )
}

export default Favorites