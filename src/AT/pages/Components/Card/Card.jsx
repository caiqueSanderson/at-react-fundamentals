import { FaStar } from "react-icons/fa6";
import styles from './styles.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Card(props) {
    const style = {
        color: "black",
    }

    const navigate = useNavigate();

    function navigateDetails() {
        navigate(`/details/${props.id}`)
    }

    return (
        <div className={styles.card} key={props.index}>
            <img src={(props.image) || "https://img.myloview.com.br/adesivos/foto-nao-encontrada-icone-vector-simbolo-sinal-400-133715057.jpg"} alt="" className={styles.image} />
            <section className={styles.description}>
                <h3>{props.title}</h3>
                <span>{
                    Array(props.rating).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                }</span>
                <span>{props.city} | {props.state}</span>
                <div className={styles.bottom}>
                    <h3 className={styles.price}>R${props.price}</h3>
                    <button
                        onClick={navigateDetails}
                        className={styles.detailsButton}
                    >Detalhes</button>
                </div>

            </section>
        </div >
    )
}