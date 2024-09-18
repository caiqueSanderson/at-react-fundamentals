import { useState } from "react";

import styles from "./styles.module.css";

export default function Register() {
    const [hotel, setHotel] = useState({
        title: "",
        image: "",
        aditionalImage: [],
        rating: "",
        city: "",
        state: "",
        price: "",
        description: "",
    })
    return (
        <div className={styles.page}>
            <div className={styles.logo}>
                <span>Booking.Hotels</span>
            </div>
            <h1>Cadastro</h1>
            <form action="" className={styles.register}>
                <label htmlFor="">
                    Nome do Hotel:
                    <input type="text" placeholder="Insira o nome do Hotel" required />
                </label>
                <label htmlFor="">
                    Url das imagens:
                    <input type="text" placeholder="Insira a primeira Url" value={hotel.image} required />
                    <input type="text" placeholder="Insira a segunda Url" value={hotel.aditionalImage} required />
                    <input type="text" placeholder="Insira a terceira Url" value={hotel.aditionalImage} />
                    <input type="text" placeholder="Insira a quarta Url" value={hotel.aditionalImage} />
                    <input type="text" placeholder="Insira a quinta Url" value={hotel.aditionalImage} />
                </label>
                <label htmlFor="">
                    Avaliação:
                    <input type="number" placeholder="Insira a avaliação do Hotel" required />
                </label>
                <label htmlFor="">
                    Cidade:
                    <input type="text" placeholder="Insira o nome da Cidade" required />
                </label>
                <label htmlFor="">
                    Estado:
                    <input type="text" placeholder="Insira o nome do Estado" required />
                </label>
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}