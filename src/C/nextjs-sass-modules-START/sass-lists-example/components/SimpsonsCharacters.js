import styles from '../styles/SimpsonsCharacters.module.scss';

const SIMPSON_CHARACTERS = [
  "Homer Simpson",
  "Bart Simpson",
  "Marge Simpson",
  "Mr. Burns",
  "Lisa Simpson",
  "Apu Nahasapeemapetilon",
  "Sideshow Bob",
  "Milhouse Van Houten",
  "Ned Flanders",
]
const myListItemStyle = `${styles['list-item']} ${styles.spacing}`;

export default function SimpsonsCharacters() {
  // Remember to use className instead of class
  // when trying to apply CSS class names to some
  // HTML tag or Component
  return <ul className={styles.list}>
    {SIMPSON_CHARACTERS.map((characterName, index)=> {
      return <li 
          key={index}
          className={myListItemStyle}
        >{characterName}</li>
    })}
  </ul>
}