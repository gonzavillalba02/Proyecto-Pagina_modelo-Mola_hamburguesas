import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import doble from '../../assets/doble-royale.png';
import smoke from '../../assets/smoke.png';
import umami from '../../assets/umami.png';
import american from '../../assets/american.png';
import king from '../../assets/king.png';
import triple from '../../assets/triple-royale.png';
import barbacua from '../../assets/barbacua.png';
import dubbel from '../../assets/dubbel.png';
import secret from '../../assets/secret.png';


const Header = () => {

    const imagenes = [
        {
            id: 1,
            src: doble
        },
        {
            id: 2,
            src: smoke
        },
        {
            id: 3,
            src: umami
        },
        {
            id: 4,
            src: american
        },
        {
            id: 5,
            src: king
        },
        {
            id: 6,
            src: triple
        },
        {
            id: 7,
            src: barbacua
        },
        {
            id: 8,
            src: dubbel
        },
        {
            id: 9,
            src: secret
        }
    ]

    return(
        <header className='header__dom'>
            <h1>Mola Hamburgesas</h1>
            <div className='header'>
                <img 
                className='header__logo'
                src={logo} 
                alt="Mola Hamburguesas" />
                <div className='header__slider-container'>
                    <ul>
                    {
                        imagenes.map((img)=>{
                            return (
                                    <li><img key={img.id} src={img.src} alt='Hamburguesa'/></li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;