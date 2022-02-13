import React from "react";
import Imagen from "../ui/Imagen";

const Main = (props) => (

    <main vivo={props.vivo} herido={props.herido}>
        <Imagen url_vivo={props.vivo} url_herido={props.herido}/>
    </main>

)

export default Main