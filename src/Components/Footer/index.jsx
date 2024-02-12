import React from "react";
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return(
        <footer className="footer">
            <p className="quality">Quality Burgers</p>
            <div className="footer-img-container">
                <img src={logo} alt="Logo" />
            </div>
            <p>Made by Gonzalo Emiliano Villalba</p>
        </footer>
    )
}

export default Footer;