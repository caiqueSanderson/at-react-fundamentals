import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import styles from "./styles.module.css";
import Menu from "../Components/Menu/Menu";

export default function Details() {
    const { id } = useParams();
    console.log(id)
    const idHotel = id;

    const hotels = JSON.parse(localStorage.getItem('@hotels'));
    const hotel = hotels[id];



    return (
        <>
            <Menu />
            <div className={styles.page} key={idHotel}>
                <div className={styles.top}>
                    <div className={styles.title}>
                        <h3>{hotel.title}</h3>
                        <span className={styles.star}>{
                            Array(hotel.rating).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                        }</span>
                    </div>

                    <span>{hotel.city} | {hotel.state}</span>
                </div>

                <img src={hotel.image} alt="" className={styles.imageMain} />
                <h3 className={styles.price}>R${hotel.price}</h3>
                <Link to={"/"}>Voltar</Link>
            </div >
        </>
    )
}