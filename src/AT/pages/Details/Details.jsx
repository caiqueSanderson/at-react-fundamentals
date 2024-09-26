import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { FaStar, FaGlassWater, FaHouseSignal } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";

import styles from "./styles.module.css";
import Menu from "../Components/Menu/Menu";

export default function Details() {
    const { id } = useParams();
    const idHotel = id;

    const hotels = JSON.parse(localStorage.getItem('@hotels'));
    const hotel = hotels ? hotels.find(hotel => hotel.id === id) : null;

    const [isLightTheme, setIsLigthTheme] = useState(true);

    function restoredTheme() {
        const theme = localStorage.getItem("@theme");
        setIsLigthTheme(theme === "true");
    }

    useEffect(() => {
        restoredTheme();
    }, []);

    return (
        <>
            <Menu />
            <div className={`${styles.page} ${isLightTheme ? styles.ligthTheme : styles.darkTheme}`} key={idHotel}>
                <div className={isLightTheme ? styles.ligthTheme : styles.darkTheme}>
                    <Link to={"/"} className={styles.return}>
                        <GrFormPrevious />
                        Voltar
                    </Link>
                    <div className={`${styles.top} ${isLightTheme ? styles.ligthTheme : styles.darkTheme}`}>
                        <div className={styles.title}>
                            <h3>{hotel.title}</h3>
                            <span className={styles.star}>{
                                Array(hotel.rating).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                            }</span>
                        </div>

                        <span>{hotel.city} | {hotel.state}</span>
                    </div>
                    <div className={isLightTheme ? styles.ligthTheme : styles.darkTheme}>
                        <img src={hotel.image} alt="" className={styles.imageMain} />
                        <div className={styles.aditionalImage}>
                            {hotel.aditionalImage.map((img) => (
                                <img src={img} alt="" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`${styles.containerPrice} ${isLightTheme ? styles.ligthTheme : styles.darkTheme}`}>
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
                <div className={`${styles.description} ${isLightTheme ? styles.ligthTheme : styles.darkTheme}`}>
                    <h3>Descrição da acomodação</h3>
                    <p>{hotel.description}</p>
                </div>
            </div >
        </>
    )
}