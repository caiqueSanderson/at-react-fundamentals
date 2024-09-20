import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState } from "react";

import { FaStar, FaGlassWater, FaHouseSignal } from "react-icons/fa6";
import styles from "./styles.module.css";
import Menu from "../Components/Menu/Menu";

export default function Details() {
    const { id } = useParams();
    const idHotel = id;

    const hotels = JSON.parse(localStorage.getItem('@hotels'));
    const hotel = hotels[id];
    console.log|(hotel)

    const [index, setIndex] = useState(0);

    function nextImage() {
        setIndex(index + 1);
    }

    function previousImage() {
        setIndex(index - 1);
    }

    return (
        <>
            <Menu />
            <div className={styles.page} key={idHotel}>
                <div className={styles.rigth}>
                    <div className={styles.top}>
                        <div className={styles.title}>
                            <h3>{hotel.title}</h3>
                            <span className={styles.star}>{
                                Array(hotel.rating).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                            }</span>
                        </div>

                        <span>{hotel.city} | {hotel.state}</span>
                    </div>
                    <div className={styles.images}>
                        <img src={hotel.image} alt="" className={styles.imageMain} />
                        <div className={styles.aditionalImage}>
                            {hotel.aditionalImage.map((img) => (
                                <img src={img} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.containerPrice}>
                    <div className={styles.benefits}>
                        <FaGlassWater />
                        <span>Café da manhã incluso</span>
                    </div>
                    <div className={styles.benefits}>
                        <FaHouseSignal />
                        <span>Wi-Fi gratuito</span>
                    </div>
                    <h3 className={styles.price}>R${hotel.price} / diária</h3>
                    <button>Ver Disponibilidade</button>
                </div>
                <div className={styles.description}>
                    <h3>Descrição da acomodação</h3>
                    <p>{hotel.description}</p>
                </div>
                <Link to={"/"}>Voltar</Link>
            </div >
        </>
    )
}