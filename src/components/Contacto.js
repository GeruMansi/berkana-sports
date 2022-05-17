import React from "react";
import Features from "./Features";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contacto() {
    return (
        <>
            <section className="seccionContacto">
                <article>
                    <div className="logoFull">
                        <img src={logo} alt="logo"/>
                        <p>Berkana <span className="letter-green">Sports</span></p>
                    </div>

                    <h2>contacto</h2>
                    
                    <div className="contactoFormulario">
                        <form action="https://formspree.io/f/xvolddle" method="POST">
                            <h3>ESCRIBINOS</h3>
                            
                            <div className="inputContainer">
                                <label htmlFor="formNombre">Nombre*</label>
                                <input type={"text"} id="formNombre" name="formNombre" required/>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="formEmail">Email*</label>
                                <input type={"email"} id="formEmail" name="formEmail" required/>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="formTelefono">Teléfono de contacto</label>
                                <input type={"tel"} id="formTelefono" name="formTelefono"/>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="formMensaje">Mensaje</label>
                                <textarea id="formMensaje" name="formMensaje" rows={"6"} required/>
                            </div>

                            <button>Enviar</button>
                        </form>

                        <ul className="contactoInfo">
                            <li><FontAwesomeIcon icon={faEnvelope} /> berkana.sports@gmail.com</li>
                            <li><FontAwesomeIcon icon={faWhatsapp} /> (+54)11 7232-0149</li>
                            <li><FontAwesomeIcon icon={faLocationDot} /> Martiniano Leguizamon 3343, CABA</li>
                        </ul>
                    </div>
                </article>

            </section>

            <Features />
        </>
    )
}