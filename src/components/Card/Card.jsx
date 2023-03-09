import style from "./Card.module.css"


export default function Card({name,species,gender,image,onClose,id}) {
   return (
      <div className={style.cardContainer}>
         <div className={style.containerButtonClose}>
            <button className={style.buttonClose} onClick={()=>{
               console.log(id);
               onClose(id)
               }}>X</button>
         </div>
         <h2 className={style.name}>{name}</h2>
         <img className={style.img}  src={image} alt="" />
         <div className={style.containerDescription}>
            <span className={style.description}>{species}</span>
            <span className={style.description}>{gender}</span>
         </div>
      </div>
   );
}
