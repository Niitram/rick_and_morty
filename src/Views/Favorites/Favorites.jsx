import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'

function Favorites() {

    const myFavorites = useSelector((state)=>state.myFavorites)


    return (
        <div>
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