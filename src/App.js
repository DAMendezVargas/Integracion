import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar';
import characters from './data.js';


//Componente
function App() {

   function searchHandler(){
      window.alert('El ID que estoy buscando')
   };
   return (
      <div className={styles.container}>
      <div className={styles.App}>
         <SearchBar onSearch={searchHandler} />         
         <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
      </div>
   );
}

export default App;
