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

export default function CustomModal({ modalIsOpen, closeModal, id, title: initialTitle, image: initialImage, rating: initialRating, city: initialCity, state: initialState, price: initialPrice }) {
    const [hotels, setHotels] = useState([]);
   
    const [title, setTitle] = useState(initialTitle);
    const [image, setImage] = useState(initialImage);
    const [rating, setRating] = useState(initialRating);
    const [city, setCity] = useState(initialCity);
    const [state, setState] = useState(initialState);
    const [price, setPrice] = useState(initialPrice);

    useEffect(() => {
        const hotelString = localStorage.getItem("@hotels");
        if (hotelString) {
            const storedHotels = JSON.parse(hotelString);
            setHotels(storedHotels);
        }
    }, []);

    function editHotel(e) {
        e.preventDefault();

        const updatedHotels = hotels.map((hotel) => {
            console.log(hotel.id)
            if (hotel.id === id) {
                return {
                    ...hotel,
                    title: title,
                    image: image,
                    rating: Number(rating),
                    city: city,
                    state: state,
                    price: Number(price),
                };
            }
            return hotel;
        })

        localStorage.setItem("@hotels", JSON.stringify(updatedHotels));
        setHotels(updatedHotels);

        closeModal()
    }

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
                    onSubmit={(e) => (editHotel(e))}
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
            </Modal>
        </>
    )
} 