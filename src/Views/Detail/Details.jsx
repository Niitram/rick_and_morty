import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GoReply } from "react-icons/go"
import styles from "../Detail/Details.module.css"

function Details() {

    const {id}=useParams()
    const [character, setCharacter] = useState("")
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api"
        const API_KEY = "26929d3a59ee.86b7ab74c93bb6c2634b"

            /* con axios */
            /* axios(`${URL_BASE}/character/${id}?key=${API_KEY}`)
                .then(response=>setCharacter(response.data)) */



        fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                setCharacter(char);
                } else {
                window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
            return setCharacter({});
        }, [id]);

        console.log(character);
        const {name, image, status,species, origin, gender} = character

    return (
        <div className={styles.container}>

        {
            name? (
                <>
                    <div className={styles.containerButton}>
                    <Link to={"/home"} >
                        <button className={styles.linkBack}><GoReply/></button>
                    </Link>
                
                    </div>
                    <div className={styles.containerh2}>
                        <h2 className={styles.h2}><u>Details:</u></h2>
                    </div>
                    <div className={styles.containerDetails}>
                        <div>
                            <h1 className={styles.h1}><u>Name:</u>  {name}</h1>
                            <h3><u>Status:</u>  {status}</h3>
                            <h3><u>Specie:</u> {species}</h3>
                            <h3><u>Gender:</u> {gender}</h3>
                            <h3><u>Origin:</u> {origin?.name}</h3>
                        </div>
                        <div>
                            <div className={styles.divBorderImg}>
                                <img className={styles.image} src={image} alt={name} />
                            </div>
                        </div>
                    </div>
                </>
            )
            : (
                <h3>Loading...</h3>
            )
        }


            
        </div>
    )
}

export default Details