import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from './styles.module.css'
import { FaStar, FaPenToSquare } from "react-icons/fa6";

import CustomModal from "../Modal/Modal";

const style = {
    color: "black",
}

export default function Card(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function navigateDetails() {
        navigate(`/details/${props.id}`)
    }

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={styles.card} key={props.index}>

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
                {modalIsOpen && (
                    <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal} id={props.index}/>
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