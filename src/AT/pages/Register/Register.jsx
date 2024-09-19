import { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegFloppyDisk } from "react-icons/fa6";

import styles from "./styles.module.css";

export default function Register() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [aditionalImage, setAditionalImage] = useState([]);
    const [rating, setRating] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [hotels, setHotels] = useState([]);

    function addAditionalImage(index, value){
        const copy = [...aditionalImage];
        copy[index] = value;
        setAditionalImage(copy)
    }

    function saveHotel(e) {
        e.preventDefault();
        const copy = [...hotels]
        copy.push({
            title: title,
            image: image,
            aditionalImage: aditionalImage,
            rating: Number(rating),
            city: city,
            state: state,
            price: Number(price),
            description: description
        })
        setHotels(copy);
        localStorage.setItem("@hotels", JSON.stringify(copy));

        setTitle("");
        setImage("");
        setAditionalImage(["","","",""]);
        setRating("");
        setCity("");
        setState("");
        setPrice("");
        setDescription("");

    }

    return (
        <div className={styles.page}>
            <div className={styles.logo}>
                <span>Booking.Hotels</span>
            </div>

            <form
                className={styles.register}
                onSubmit={(e) => (saveHotel(e))}
            >
                <h1 className={styles.title}>Cadastro</h1>
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
                    Url das imagens:
                    <input
                        type="text"
                        placeholder="Imagem principal"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Insira a segunda Url"
                        value={aditionalImage[0]}
                        onChange={(e) => addAditionalImage(0, e.target.value)}
                        required />
                    <input
                        type="text"
                        placeholder="Insira a terceira Url"
                        value={aditionalImage[1]}
                        onChange={(e) => addAditionalImage(1, e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Insira a quarta Url"
                        value={aditionalImage[2]}
                        onChange={(e) => addAditionalImage(2, e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Insira a quinta Url"
                        value={aditionalImage[3]}
                        onChange={(e) => addAditionalImage(3, e.target.value)}
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
                <label>
                    Descrição:
                    <textarea
                        name="description"
                        placeholder="Insira a descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                </label>
                <button type="submit">
                    <span>Salvar </span>
                    <FaRegFloppyDisk />
                </button>
            </form>
            <Link to="/">Voltar para a página Inicial</Link>
        </div>
    )
}