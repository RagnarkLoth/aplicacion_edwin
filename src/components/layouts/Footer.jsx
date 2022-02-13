import React from "react";
import Boton from "../ui/Boton";
import { NavLink } from "react-router-dom";

const Footer = (props) => (

    <footer pilares={props.pilares}>
        {
            props.pilares.map((pilar) => 
                <NavLink to={pilar.ruta}><Boton nombre={pilar.nombre}/></NavLink>
            )
        }
    </footer>

)

export default Footer