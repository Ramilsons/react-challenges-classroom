import styles from './Card.module.css';

function Card(props){
    return(
        <div className={styles.card}>
            <img className={styles.img} src={props.UrlImage} />
            <h2 className={styles.name}>{props.Name}</h2>
            <p >{props.Price}</p>
        </div>
    )
}

export default Card;