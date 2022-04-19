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
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <p>WhatsApp</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <p>Martiniano Leguizamon 3343, CABA</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>berkana.sports@gmail.com</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}