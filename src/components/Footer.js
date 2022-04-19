import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import logo from '../assets/logoNavbar.png'
import { Link } from "react-router-dom";

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
                        <Link>
                            <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
                            <p>WhatsApp</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FontAwesomeIcon className="icon" icon={faLocationDot}/>
                            <p>Martiniano Leguizamon 3343, CABA</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                            <p>berkana.sports@gmail.com</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}