import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import logo from '../assets/logoNavbar.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-brand">
                <img alt="logo" title="Berkana Sports" src={logo}/>
                <p className="brand">Berkana{' '}<b className="letter-green">Sports</b></p>
                <p>Equipamiento para Hogar y Gimnasios</p>
            </div>
            <div className="footer-iconos">
                <ul>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5491172320149&text=Hola%20quisiera%20mas%20informacion%20de%20los%20productos" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
                            <p>WhatsApp</p>
                            <p>(+54)11 7232-0149</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://goo.gl/maps/iWf2ojLvUmXsgTkf8" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="icon" icon={faLocationDot}/>
                            <p>Martiniano Leguizamon 3343</p>
                            <p>CABA</p>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:berkana.sports@gmail.com?
                        &subject=Contacto" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                            <p>berkana.sports@gmail.com</p>
                            <p>{''}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copyrightFooter">
            <p><b className="letter-green">BerkanaSports &copy;</b> Diseño web por <a href="https://github.com/GeruMansi" target="_blank">German</a>, <a href="https://jorge.osses.ar" target="_blank">Jorge</a> y <a href="https://www.behance.net/barrerapaula" target="_blank">Paula</a></p>
            </div>
        </footer>
    )
}