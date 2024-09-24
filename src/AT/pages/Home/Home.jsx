import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Menu from "../Components/Menu/Menu";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";

import styles from "./styles.module.css";

export default function Home() {
    const [isLightTheme, setIsLigthTheme] = useState(true);
    function toggleTheme() {
        setIsLigthTheme(!isLightTheme);
    };

    const [hotels, setHotels] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("filter");

    const searchLower = search.toLowerCase();
    const hotelsFiltrados = hotels.filter((hotel) =>
        hotel.title.toLowerCase().includes(searchLower)
    ).sort((a, b) => {
        if (filter === "lowestPrice") {
            return a.price - b.price;
        } else if (filter === "highestPrice") {
            return b.price - a.price;
        } else if (filter === "highestRating") {
            return b.rating - a.rating;
        } else if (filter === "lowestRating") {
            return a.rating - b.rating;
        } else {
            return 0;
        }
    })

    function restoredHotels() {
        const hotelString = localStorage.getItem("@hotels");

        if (hotelString) {
            const hotelJSON = JSON.parse(hotelString);
            setHotels(hotelJSON);
        };
    };

    useEffect(() => { 
        restoredHotels(); 

        window.addEventListener("storage", restoredHotels);
        return () => {
            window.removeEventListener('storage', restoredHotels);
        };

    }, []);

    return (
        <div className={isLightTheme ? styles.ligthTheme : styles.darkTheme}>
            <Menu toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
            <section className={styles.welcome}>
                <div className={styles.text}>
                    <h2 className={styles.slogan}>Aproveite cada momento</h2>
                    <p className={styles.subtitle}>Conosco suas férias se tornam mágicas</p>
                </div>
                <div className={styles.search}>
                    <select
                        name="filter"
                        id="filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className={styles.filter}>
                        <option value="filter">Ordenar por:</option>
                        <option value="lowestPrice">Menor Preço</option>
                        <option value="highestPrice">Maior Preço</option>
                        <option value="highestRating">Maior Avaliação</option>
                        <option value="lowestRating">Menor Avaliação</option>
                    </select>
                    <input
                        type="search"
                        placeholder="Encontre o hotel dos sonhos"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </div>
            </section>
            <div className={styles.cards}>
                {hotelsFiltrados.map(
                    (hotel) => (
                        <Card key={hotel.id} id={hotel.id} image={hotel.image} title={hotel.title} rating={hotel.rating} city={hotel.city} state={hotel.state} price={hotel.price} />
                    )
                )
                }
            </div>
            <Footer isLightTheme={isLightTheme}/>
        </div>
    )
}