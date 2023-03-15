import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import styles from "./Favorites.module.css"

function Favorites() {

    const myFavorites = useSelector((state)=>state.myFavorites)


    return (
        <div className={styles.container}>
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
    )
}

export default Favorites