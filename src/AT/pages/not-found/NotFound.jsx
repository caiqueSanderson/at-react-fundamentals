import { FaCircleQuestion } from "react-icons/fa6";

import styles from "./styles.module.css";

export default function NotFound() {
    const style = {
        color:"rgb(10, 107, 218)",
        fontSize:"2rem",
    }
    return (
       <div className={styles.page}>
            <FaCircleQuestion style={style}/>
            <span className={styles.error}>404</span>
            <h1>Page Not Found</h1>
       </div>
    )
}