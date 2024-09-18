import { Link } from "react-router-dom";

import Menu from "../Components/Menu/Menu";
import Card from "../Components/Card/Card";

import styles from "./styles.module.css";

export default function Home() {
    
    function storedHotels(){
        const hotelString = localStorage.getItem("@hotels");
    }

    storedHotels();
    
    return (
        <div className={styles.page}>
            <Menu />
            <Card image='https://cf.bstatic.com/xdata/images/hotel/square240/404175626.webp?k=dcff45977a0f5ecd2cc5bab01829eb7df21a228b44c80a06054e24efebf53fe0&o=' title='Pousada Alto Da Boa Vista' rating='4' city='Campos do Jordäo' state='SP' price='R$658'/>
        </div>
    )
}