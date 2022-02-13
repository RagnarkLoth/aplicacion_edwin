import React from "react";
import Boton from "../ui/Boton"
import { NavLink } from "react-router-dom";

//let nombrePilares = []

const Header = (props) => (

    <header pilares={props.pilares}>

            {
                props.pilares.map((pilar) => 
                    <NavLink to={pilar.ruta}><Boton nombre={pilar.nombre}/></NavLink>
                )
            }

    </header>

)

export default Header