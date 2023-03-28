import Card from "../Card/Card";
import styles from "./Cards.module.css"
import { useSelector } from "react-redux";

export default function Cards() {
   const characters = useSelector(state=>state.characters)
   return (<div className={styles.container}>
      {characters.map(({name,
                        species,
                        gender,
                        image,
                        id})=>{
                        return <Card
                           key={id}
                           name={name}
                           species={species}
                           gender={gender}
                           image={image}
                           id={id}
                        />
                                 })}
                              </div>);
}
