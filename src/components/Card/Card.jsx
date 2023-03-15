import style from "./Card.module.css"
import { Link , useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteFavorite, addFavorite, onDelete } from "../../redux/actions";
/* import { Connect } from "react-redux"; */

function Card({name,species,gender,image,id /* , myFavorites , deleteFavorite , addFavorite */ }) {

   const dispatch = useDispatch()
   const locationNow = useLocation()
   const myFavorites = useSelector((state)=>state.myFavorites)
   const [isFav, setIsFav]= useState(false)

   const char = {name,species,gender,image,id}

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =()=>{
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFavorite(id))
         /* Con mathDispatchToProps seria asi porque dispatcha automaticamente y se agregarian las funciones a las props
         adeleteFavorite(id) */
      }else{
         setIsFav(true)
         dispatch(addFavorite(char))
         /* Con mathDispatchToProps seria asi porque dispatcha automaticamente
         addFavorite(char) */
      }
   }
   return (
      <div className={style.cardContainer}>
         <div className={style.containerButtonClose}>
                        {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
               { locationNow.pathname === "/home" && (
                  <button className={style.buttonClose} onClick={()=>{
                     dispatch(deleteFavorite(id))
                     dispatch(onDelete(id))
                  }}>X</button>
               )}
            
         </div>
               <Link to={`/detail/${id}`}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
         <img className={style.img}  src={image} alt="" />
         <div className={style.containerDescription}>
            <span className={style.description}>{species}</span>
            <span className={style.description}>{gender}</span>
         </div>
      </div>
   );
}

/*
Tengo que agregar el estado a las props
   const mapStateToProps =(state)=>{
      return {
         myFavorites: state.myFavorites,
      };
} */

/* const mathDispatchToProps =(dispatch)=>{
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id));
      },
   }
} */
/* export default connect(mapStateToProps, mathDispatchToProps)(Card) */


export default Card