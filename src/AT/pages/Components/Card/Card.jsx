import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from './styles.module.css'
import { FaStar, FaPenToSquare, FaTrash } from "react-icons/fa6";

import CustomModal from "../Modal/Modal";

export default function Card(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [hotels, setHotels] = useState([])
    const navigate = useNavigate();

    function navigateDetails() {
        navigate(`/details/${props.id}`)
    }

    const dataHotels = JSON.parse(localStorage.getItem("@hotels"));

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    function deleteHotel() {
        const updatedHotels = dataHotels.filter((hotel, index) => index !== props.id);
        setHotels(updatedHotels);
        localStorage.setItem("@hotels", JSON.stringify(updatedHotels));
    }

    return (
        <div className={styles.card} key={props.id}>

            <img src={props.image || "https://img.myloview.com.br/adesivos/foto-nao-encontrada-icone-vector-simbolo-sinal-400-133715057.jpg"} alt="" className={styles.image} />

            <section className={styles.description}>
                <h3>{props.title}</h3>
                <span>{
                    Array(props.rating).fill().map((_, index) => (<FaStar key={index} color="yellow" />))
                }</span>

                <span>{props.city} | {props.state}</span>
                <FaPenToSquare
                    className={styles.editButton}
                    onClick={openModal}
                />
                <FaTrash
                    className={styles.deleteButton}
                    onClick={deleteHotel}
                />
                {modalIsOpen && (
                    <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal} id={props.index} dataHotel={
                        {
                            title: `${props.title}`,
                            image: `${props.image}`,
                            rating: `${props.rating}`,
                            city: `${props.city}`,
                            state: `${props.state}`,
                            price: `${props.price}`,
                        }
                    } />
                )}

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