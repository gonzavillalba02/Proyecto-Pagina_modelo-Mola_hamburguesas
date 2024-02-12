import React from "react";
import './card.css';
import Info from "../Info";

const Card = ({key, name, propiedades, imagen}) => {

    return(
        <article className="card__dom">
            <h2>{name}</h2>
            <div className="card__contenido">
                <div className="card__contenido-info">
                    {propiedades.map((prop)=>{
                        return <Info key={prop.prop} nombre={prop.prop} desc={prop.desc} />
                    })}
                </div>
                <img src={imagen} alt="Hamburguesa" className="card__contenido-img"/>
            </div>
        </article>
    )
}

export default Card;