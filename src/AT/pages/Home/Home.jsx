import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from "../Components/Menu/Menu";
import Card from "../Components/Card/Card";

import styles from "./styles.module.css";

export default function Home() {
    const [hotels, setHotels] = useState([]);

    function restoredHotels() {
        const hotelString = localStorage.getItem("@hotels");

        if (hotelString) {
            const hotelJSON = JSON.parse(hotelString);
            setHotels(hotelJSON);
        }
    }

    useEffect(() => { restoredHotels(); }, []);

    return (
        <div className={styles.page}>
            <Menu />
            <section className={styles.welcome}>
                <img src="https://img.freepik.com/fotos-gratis/grande-piscina-com-uma-pequena-casa_1203-212.jpg" alt="" />
                <div className={styles.text}>
                    <h2>Aproveite cada momento</h2>
                    <p>Conosco suas férias se tornam mágicas</p>
                </div>
            </section>
            <Card image='https://cf.bstatic.com/xdata/images/hotel/square240/404175626.webp?k=dcff45977a0f5ecd2cc5bab01829eb7df21a228b44c80a06054e24efebf53fe0&o=' title='Pousada Alto Da Boa Vista' rating='4' city='Campos do Jordäo' state='SP' price='658' />
            <div>
                {hotels.map(
                    (hotel, index) => (
                        <Card id={index} image={hotel.image} title={hotel.title} rating={hotel.rating} city={hotel.city} state={hotel.state} price={hotel.price}/>
                        )
                )
                }
            </div>
        </div>
    )
}