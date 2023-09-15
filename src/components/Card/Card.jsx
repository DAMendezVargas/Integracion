//Componente
import styles from './Card.module.css'

export default function Card(props) {
   const {character, onClose} = props;

   return (
      <div className={styles.container} 
      style={{
            // backgroundImage: `url(${character.image})`
      }}>
         <button className={styles.Bottom} onClick={onClose}>X</button>
         <h2 className={styles.name}>{character.name}</h2>
         <img src={character.image} alt={character.image} />
         
         <div className={styles.info}>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            </div>
         
      </div>
   );
};



