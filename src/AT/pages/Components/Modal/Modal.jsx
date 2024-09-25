import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import Modal from "react-modal";

import { FaRegCircleXmark, FaRegFloppyDisk } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
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

export default function CustomModal({ modalIsOpen, closeModal, onEdit, id }) {
    const [hotels, setHotels] = useState([]);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [price, setPrice] = useState("");

    function restoredHotels() {
        const hotelString = localStorage.getItem("@hotels");

        if (hotelString) {
            const hotelJSON = JSON.parse(hotelString);
            setHotels(hotelJSON);
        }
    }

    function restoredData(id) {
        const hotel = hotels.find((hotel) => hotel.id === id);
        if (hotel) {
            setTitle(hotel.title);
            setImage(hotel.image);
            setRating(hotel.rating);
            setCity(hotel.city);
            setState(hotel.state)
            setPrice(hotel.price);
        }
    }

    function submitEdit(e) {
        e.preventDefault();

        const updatedHotel = hotels.find((hotel) => {
            if (hotel.id === id) {
                return {
                    id: hotel.id,
                    title: title,
                    image: image,
                    aditionalImage: hotel.aditionalImage,
                    rating: Number(rating),
                    city: city,
                    state: state,
                    price: Number(price),
                    description: hotel.description,
                };
            }
        });

        onEdit(id, updatedHotel)
        toast("Hotel editado com sucesso!");
    }


    useEffect(() => {
        restoredHotels();
    }, []);

    useEffect(() => {
        if (hotels.length > 0) {
            restoredData(id);
        }
    }, [hotels, id]);
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Editar Informacoes do Hotel"
            >
                <FaRegCircleXmark
                    onClick={closeModal}
                    style={xmarkStyle}
                />
                <form
                    className={styles.register}
                    onSubmit={submitEdit}
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
                        <span>Salvar edições</span>
                        <FaRegFloppyDisk />
                    </button>
                </form>
                <ToastContainer />
            </Modal>
        </>
    )
} 