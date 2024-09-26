import { useState, useEffect } from "react";

import styles from "./styles.module.css";

export default function Favorite({ hotels }) {
    const [hotelsFavorites, setHotelsFavorites] = useState([]);


    // useEffect(() => {
    //     const favorites = JSON.parse(localStorage.getItem('@favorites')) || [];
    //     const favoriteHotelsList = hotels.filter(hotel => favorites.includes(hotel.id));
    //     setHotelsFavorites(favoriteHotelsList);
    // }, [hotels]);

    return (
        hotelsFavorites.map(hotel => (
                <div className={styles.card} key={id}>

                    <img src={hotel.image}
                        alt={hotel.title}
                        className={styles.image} />

                    <section className={styles.description}>
                        <h3>{hotel.title}</h3>
                        <span>{
                            Array(Number(hotel.rating)).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                        }</span>

                        <span>{hotel.city} | {hotel.state}</span>

                        <div className={styles.bottom}>
                            <h3 className={styles.price}>R${price}</h3>
                        </div>

                    </section>
            </div>
        )
        )
    )
}