import { useParams } from "react-router-dom";

import Menu from "../Components/Menu/Menu";

export default function Details() {
    const params = useParams()
    const nameHotel = params.name;

    return (
        <>
            <Menu />
            <h1>{nameHotel}</h1>
        </>
    )
}