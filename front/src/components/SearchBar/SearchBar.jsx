import styles from "./SearchBar.module.css"
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { onSearch } from "../../redux/actions";



export default function SearchBar() {

   const characters = useSelector(state=>state.characters)
   const [id, setId] = useState("")
   const dispatch = useDispatch();
   const setValue =(e)=>{
      setId(e.target.value)
   }

   return (
      <>
         <input onChange={setValue} className={styles.input} type='search' placeholder="Search" onKeyDown={(e)=>{
            if (e.key === 'Enter') {
               if (characters.find((char) => char.id === id)) {
                  return alert("no encontrado o repetido")
               }
               dispatch(onSearch(id))
            }
            
            
         }}/>
         <button className={styles.button} onClick={()=>{
            if (characters.find((char) => char.id === id)) {
               return alert("no encontrado o repetido")
            }
            dispatch(onSearch(id)) 
         }}>Search</button>
      </>
   );
}
