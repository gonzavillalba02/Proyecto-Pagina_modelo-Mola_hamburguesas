import React, { useState } from "react";
import './slider.css';
import Card from "./Card";
import doble from '../../assets/doble-royale.png';
import smoke from '../../assets/smoke.png';
import umami from '../../assets/umami.png';
import american from '../../assets/american.png';
import king from '../../assets/king.png';
import triple from '../../assets/triple-royale.png';
import barbacua from '../../assets/barbacua.png';
import dubbel from '../../assets/dubbel.png';
import secret from '../../assets/secret.png';
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const Slider = () => {

    const hamburguesas = [
        {   id: 0,
            nombre: "UMAMI",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Salsa Umami",
                    desc: "(Ketchup Ahumado)"
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Cebolla Crispy",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: umami
        },
        {   id: 1,
            nombre: "DOBLE ROYAL",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Cebolla Finamente Picada",
                    desc: ""
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Doble Capa de Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Mayonesa y Ketchup",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: doble
        },
        {   id: 2,
            nombre: "DOBLE SMOKE SHACK",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Salsa Shake",
                    desc: ""
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Morrón Asado",
                    desc: ""
                },
                {
                    prop: "Doble Capa de Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: smoke
        },
        {   id: 3,
            nombre: "THE AMERICAN",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Cebolla Finamente Picada",
                    desc: ""
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Pepinillos Agridulces",
                    desc: ""
                },
                {
                    prop: "Mayonesa y Ketchup",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                },
                {
                    prop: "Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Tomate y Lechuga",
                    desc: ""
                }
            ],
            imagen: american
        },
        {   id: 4,
            nombre: "THE KING MOLA",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Salsa Ahumada Mola",
                    desc: ""
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Aros de Cebolla",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: king
        },
        {   id: 5,
            nombre: "TRIPLE ROYAL",
            propiedades: [
                {
                    prop: "Triple Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Cebolla Finamente Picada",
                    desc: ""
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Triple Capa de Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Mayonesa y Ketchup",
                    desc: ""
                },
                {
                    prop: "6 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: triple
        },
        {   id: 6,
            nombre: "BARBACUÁ",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Doble Capa de Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Pan Brioche",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Barbacoa Ahumada",
                    desc: ""
                },
                {
                    prop: "Cebolla Morada",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: barbacua
        },
        {   id: 7,
            nombre: "DUBBEL-DUBBEL",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Pepinillos Agridulces",
                    desc: ""
                },
                {
                    prop: "Pan de Papa",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Tomate y Lechuga",
                    desc: ""
                },
                {
                    prop: "Rodaja de Cebolla",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                },
                {
                    prop: "Salsa Mil Islas",
                    desc: ""
                }
            ],
            imagen: dubbel
        },
        {   id: 8,
            nombre: "SECRET BURGER",
            propiedades: [
                {
                    prop: "Doble Medallón",
                    desc: "(100 GR C/U Blend de 3 Cortes)"
                },
                {
                    prop: "Doble Capa de Panceta Ahumada",
                    desc: ""
                },
                {
                    prop: "Pan de Papa",
                    desc: "(Tostado con Manteca)"
                },
                {
                    prop: "Salsa Mil Islas",
                    desc: ""
                },
                {
                    prop: "Pepinillos Agridulces",
                    desc: ""
                },
                {
                    prop: "4 Fetas de Cheddar Milkaut",
                    desc: ""
                }
            ],
            imagen: secret
        },
    ]

    const [margin, setMargin] = useState(0);

    const next = () => {
        setMargin(margin - 100)
    }

    const prev = () => {
        setMargin(prevMargin => prevMargin + 100);
    }

    var estilo = {
        marginLeft: `${margin}vw`,
    }

    return(
        <>
        <button className= {(margin === 0 && "no") + " arrow prev"} onClick={()=> prev()}><IoIosArrowBack /></button>
        <button className={(margin === -800 && "no") + " arrow next"} onClick={()=> next()}><IoIosArrowForward /></button>
            <section className="slider__dom">
                <div className="slider-container">
                    <ul style={estilo}>
                        {hamburguesas.map((burga) => {
                            return <li><Card key={burga.id} name={burga.nombre} propiedades={burga.propiedades} imagen={burga.imagen}/></li>
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Slider;