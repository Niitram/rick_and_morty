import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
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
                           onClose={onClose}
                           id={id}
                        />
                                 })}
                              </div>);
}
