import React from "react";
import './contacto.css';
import mola from '../../assets/manos.png';
import insta from '../../assets/instagram.png';
import wpp from '../../assets/whatsapp.png';

const Contacto = () => {
    return(
        <section className="contacto__dom">
            <h2>CONTACTANOS</h2>
            <div className="contacto-container">
                <img src={mola} alt="Hamburguesa" className="hamburguesa-img"/>
                <article className="contacto__info">
                    <div className="contacto">
                        <img src={wpp} alt="Whatsapp" />
                        <a href="#">+XX XXX XXX XXXX</a>
                    </div>
                    <div className="contacto">
                        <img src={insta} alt="Instagram" />
                        <a href="#">@instagram_mola</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Contacto;