import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Modal from "react-modal";

import { FaRegCircleXmark, FaRegFloppyDisk } from "react-icons/fa6";
import styles from "./styles.module.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const xmarkStyle = {
    color: "rgb(35, 129, 236)",
}

Modal.setAppElement('#root');

export default function CustomModal({ modalIsOpen, closeModal, id, dataHotel }) {
    const [hotel , setHotel] = useState([]);
    const hotelData = dataHotel;

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [price, setPrice] = useState("");

    /* useEffect(() => {
        const hotelString = localStorage.getItem("@hotels");
        if (hotelString) {
            const hotelJSON = JSON.parse(hotelString);
            const hotelEdit = hotelJSON[id];
            console.log(hotelEdit)
            setTitle(hotelEdit.title);
            setImage(hotelEdit.image);
            setRating(hotelEdit.rating);
            setCity(hotelEdit.city);
            setState(hotelEdit.state);
            setPrice(hotelEdit.price);
        }
    }, [id]); */

    useEffect(() => {
        if (hotelData) {
            setTitle(hotelData.title);
            setImage(hotelData.image);
            setRating(hotelData.rating);
            setCity(hotelData.city);
            setState(hotelData.state);
            setPrice(hotelData.price);
        }
    }, [hotelData]);

    const [hotels, setHotels] = useState([]);

    /*  function saveHotel(e) {
         e.preventDefault();
         const hotelString = localStorage.getItem("@hotels");
         if (hotelString) {
             const hotelJSON = JSON.parse(hotelString);
             hotelJSON[id] = {
                 title: title,
                 image: image,
                 rating: Number(rating),
                 city: city,
                 state: state,
                 price: Number(price)
             };
             localStorage.setItem("@hotels", JSON.stringify(hotelJSON));
         }
         closeModal();
     } */

    function saveHotel(e) {
        e.preventDefault();
        const updatedHotels = [...hotels];
        updatedHotels[id] = {
            title: title,
            image: image,
            rating: Number(rating),
            city: city,
            state: state,
            price: Number(price),
        };

        setHotels(updatedHotels);
        localStorage.setItem("@hotels", JSON.stringify(updatedHotels));

        closeModal();
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <FaRegCircleXmark
                    onClick={closeModal}
                    style={xmarkStyle}
                />
                <form
                    className={styles.register}
                    onSubmit={(e) => (saveHotel(e))}
                >
                    <h1 className={styles.title}>Editar informações</h1>
                    <label>
                        Nome do Hotel:
                        <input
                            type="text"
                            placeholder="Insira o nome do Hotel"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Url da imagem:
                        <input
                            type="text"
                            placeholder="Imagem principal"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Avaliação:
                        <input
                            type="number"
                            placeholder="Insira a avaliação do Hotel"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required />
                    </label>
                    <label>
                        Cidade:
                        <input
                            type="text"
                            placeholder="Insira o nome da Cidade"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Estado:
                        <input
                            type="text"
                            placeholder="Insira o nome do Estado"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required />
                    </label>
                    <label>
                        Preço:
                        <input
                            type="number"
                            placeholder="Insira o preço da diária"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required />
                    </label>
                    <button type="submit">
                        <span>Salvar </span>
                        <FaRegFloppyDisk />
                    </button>
                </form>
            </Modal>
        </>
    )
} 