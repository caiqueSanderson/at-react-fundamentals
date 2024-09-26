import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from './styles.module.css'
import { FaStar, FaRegHeart, FaHeart, FaPenToSquare, FaTrash } from "react-icons/fa6";

import CustomModal from "../Modal/Modal";

export default function Card({ id, image, title, rating, city, state, price, onDelete, onEdit}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [hotels, setHotels] = useState([])
    const [favorite, setFavorite] = useState(false);

    function restoredHotels() {
        const hotelString = localStorage.getItem("@hotels");

        if (hotelString) {
            const hotelJSON = JSON.parse(hotelString);
            setHotels(hotelJSON);
        }
    }

    const navigate = useNavigate();

    function navigateDetails() {
        navigate(`/details/${id}`)
    }

    function navigateEdit() {
        navigate(`/edit/${id}`)
    }

    function openModal() {
        setIsOpen(true);
        navigateEdit;
    }
    function closeModal() {
        setIsOpen(false);
    }

    function hotelEdit() {
        onEdit(id, hotels);
    }

    function hotelDelete() {
        onDelete(id);
    }

    function favoriteChange() {
        const favorites = JSON.parse(localStorage.getItem('@favorites')) || [];
        if(favorite === false){
            setFavorite(!favorite);
            if (!favorites.includes(id)) {
                favorites.push(id);
                localStorage.setItem('@favorites', JSON.stringify(favorites));
              }
        }else{
            setFavorite(!favorite);
        }
        
    }

    useEffect(() => { restoredHotels(); }, []);
    return (
        <div className={styles.card} key={id}>
            <span className={styles.favorite} onClick={favoriteChange}>
                {favorite ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
            </span>


            <img src={image}
                alt={title}
                className={styles.image} />

            <section className={styles.description}>
                <h3>{title}</h3>
                <span>{
                    Array(Number(rating)).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                }</span>

                <span>{city} | {state}</span>
                <FaPenToSquare

                    className={styles.editButton}
                    onClick={openModal}
                />
                <FaTrash
                    className={styles.deleteButton}
                    onClick={hotelDelete}
                />
                {modalIsOpen && (
                    <CustomModal
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                        onEdit={hotelEdit}
                        id={id}
                    />
                )}

                <div className={styles.bottom}>
                    <h3 className={styles.price}>R${price}</h3>
                    <button
                        onClick={navigateDetails}
                        className={styles.detailsButton}
                    >Detalhes</button>
                </div>

            </section>
        </div >
    )
}