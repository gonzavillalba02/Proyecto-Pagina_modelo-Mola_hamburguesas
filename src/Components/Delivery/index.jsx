import React from "react";
import './delivery.css';
import moto from '../../assets/delivery.png';

const Delivery = () => {
    return(
        <section className="delivery__dom">
            <h2>DELIVERY</h2>
            <article className="delivery-container">
                <div className="delivery__info">
                    <p className="delivery__info-p">TRABAJAMOS SOLO CON</p>
                    <p className="delivery__info-p">DELIVERY & TAKE AWAY</p>
                    <p className="delivery__info-p">DE 20 A 00HS DE</p>
                    <p className="delivery__info-p">MARTES A DOMINGO</p>
                </div>
                <img src={moto} alt="Moto" />
            </article>
        </section>
    )
}

export default Delivery;