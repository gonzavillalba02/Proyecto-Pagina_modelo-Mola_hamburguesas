import React from "react";
import './info.css';

const Info = ({key, nombre, desc}) => {
    return(
        <div className="info__dom">
            <p className="info__nombre">{nombre}</p>
            <p className="info__desc">{desc}</p>
        </div>
    )
}

export default Info;