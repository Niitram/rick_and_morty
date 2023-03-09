import styles from "./SearchBar.module.css"
import { useState } from "react";



export default function SearchBar(props) {

   const [character, setCharacter] = useState("")
   const setValue =(e)=>{
      setCharacter(e.target.value)
   }

   return (
      <>
         <input onChange={setValue} className={styles.input} type='search' placeholder="Search" />
         <button className={styles.button} onClick={()=>{
            props.onSearch(character)
         }}>Search</button>
      </>
   );
}
