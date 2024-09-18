import { FaStar } from "react-icons/fa6";
import styles from './styles.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
    const style = {
        color: "black",
    }

    const navigate = useNavigate();

    function navigateDetails(){
        navigate(`/details/${props.title}`)
    }

    return (
        <div onClick={navigateDetails} className={styles.card} key={props.index}>
                <img src={props.image} alt="" className={styles.image} />
                <section className={styles.description}>
                    <h3>{props.title}</h3>
                    <span>{
                        Array(Number(props.rating)).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                    }</span>
                    <span>{props.city} | {props.state}</span>
                    <h3 className={styles.price}>{props.price}</h3>
                </section>
        </div >
    )
}