import styles from "./styles.module.css";

export default function Footer(props) {
    return (
        <footer className={`${styles.footer} ${props.isLightTheme ? styles.lightTheme : styles.darkTheme}`}>
            <p>Copyright &copy; 2024 Booking.Hotels. Todos os direitos reservados</p>
        </footer>
    )
}