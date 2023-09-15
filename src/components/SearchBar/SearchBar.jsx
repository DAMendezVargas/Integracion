import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch}=props;
   return (
      <div className={styles.background}>
         <input className={styles.searchbar} type='search' />
         <button className={styles.buttom} onClick={onSearch}>Agregar</button>
      </div>
   );
}
