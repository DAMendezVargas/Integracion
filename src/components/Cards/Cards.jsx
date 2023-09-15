//Componente

import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards(props) {
   const {characters}=props;
   const {onClose} =props;
   return <div className={styles.prueba}>
      {characters.map((character)=>(<Card character={character} onClose={onClose}/>)
      )}
   </div>;
}
