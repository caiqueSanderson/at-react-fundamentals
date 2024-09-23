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
                <div className={styles.text}>
                    <h2 className={styles.slogan}>Aproveite cada momento</h2>
                    <p className={styles.subtitle}>Conosco suas férias se tornam mágicas</p>
                </div>
                <div className={styles.search}>
                    <input
                        type="text"
                        placeholder="Encontre o hotel dos sonhos"
                    // value={}
                    // onChange={}
                    />
                    <button type="submit">Buscar</button>
                </div>
            </section>
            <div className={styles.cards}>
                {hotels.map(
                    (hotel, index) => (
                        <Card key={hotel.id} id={hotel.id} image={hotel.image} title={hotel.title} rating={hotel.rating} city={hotel.city} state={hotel.state} price={hotel.price} />
                    )
                )
                }
            </div>
        </div>
    )
}