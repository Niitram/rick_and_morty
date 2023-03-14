import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteFavorite, addFavorite } from "../../redux/actions";

export default function Card({name,species,gender,image,onClose,id}) {

   const dispatch = useDispatch()
   const myFavorites = useSelector((state)=>state.myFavorites)
   const [isFav, setIsFav]= useState(false)

   const char = {name,species,gender,image,onClose,id}

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
      }else{
         setIsFav(true)
         dispatch(addFavorite(char))
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
               { onClose && (
                  <button className={style.buttonClose} onClick={()=>{onClose(id)}}>X</button>
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