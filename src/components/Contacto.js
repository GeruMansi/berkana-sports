import React from "react";
import Features from "./Features";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useForm, ValidationError } from '@formspree/react';
import Gracias from "./Gracias";


export default function Contacto() {
 
    const [state, handleSubmit] = useForm("mbjwqvke");
    if (state.succeeded) {
        return <Gracias />;
    }

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
                        <form onSubmit={handleSubmit}>
                            <h3>ESCRIBINOS</h3>
                            
                            <div className="inputContainer">
                                <label htmlFor="formNombre">Nombre*</label>
                                <input type="text" id="formNombre" name="name" required/>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="formEmail">Email*</label>
                                <input type="email" id="formEmail" name="email" required/> 
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />                               
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="formTelefono">Teléfono de contacto</label>
                                <input type="tel" id="formTelefono" name="tel"/>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="formMensaje">Mensaje</label>
                                <textarea id="formMensaje" name="message" rows={"6"} required/>
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <button type="submit" disabled={state.submitting}>Enviar</button>
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