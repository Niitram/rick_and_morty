import styles from "./SearchBar.module.css"


export default function SearchBar(props) {
   return (
      <div>
         <input className={styles.input} type='search' placeholder="Search" />
      <button className={styles.button} onClick={(id)=>{
         props.onSearch(id)
      }}>Search</button>
      </div>
   );
}
