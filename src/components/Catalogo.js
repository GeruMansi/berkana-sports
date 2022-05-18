import React from "react";
import logo from '../assets/Logo.png'
import logoicon from '../assets/logoNavbar.png'
import imgContacto from '../assets/contacto.png'
import pdf from "../assets/Catalogo BERKANA SPORTS.pdf"
import { useForm } from '@formspree/react';
import { Link } from "react-router-dom";

export default function Catalogo() {
    const [state, handleSubmit] = useForm("mzbylbvr");
    if (state.succeeded) {
        return <div className="legend-form"><p className="letter-green">Gracias por contactar! </p><Link to={'/'}>Volver</Link></div>;
    }
    return (
        <>
            <section className="seccionCatalogo">
                <article className="catalogoDescarga">
                    <img src={logo} alt="logo" />
                    <h2>DESCARGÁ NUESTRO CATÁLOGO</h2>
                    <a href={pdf} download="Catalogo BERKANA SPORTS.pdf">descargar</a>
                </article>

                <article className="catalogoPedido">
                    <h2>HACENOS TU PEDIDO</h2>
                    <p>envianos un formulario online o contactate a través de los siguientes canales</p>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=5491172320149&text=Hola%20me%20contacto%20para%20obtener%20el%20catalogo" target="_blank" rel="noreferrer noopener" className="catalogoWhatsapp">WhatsApp</a>
                        <a href="mailto:berkana.sports@gmail.com?
                        subject=Consulta%20de%20catalogo" target="_blank" rel="noreferrer noopener" className="catalogoMail">berkanasports@gmail.com</a>
                    </div>
                </article>

                <article className="catalogoFormulario" id="formulario">
                    <form onSubmit={handleSubmit}>
                        <h3>FORMULARIO ONLINE</h3>
                        <p>Completá la siguiente información:</p>

                        <div className="inputContainer">
                            <label htmlFor="formNombre">Nombre*</label>
                            <input type={"text"} id="formNombre" name="name" required/>
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="formEmail">Email*</label>
                            <input type={"email"} id="formEmail" name="email" required/>
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="formTelefono">Teléfono de contacto</label>
                            <input type={"tel"} id="formTelefono" name="tel"/>
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="formMensaje">Mensaje</label>
                            <textarea id="formMensaje" name="message" rows="6"/>
                        </div>

                        <button type="submit" disabled={state.submitting}>cotizar</button>
                    </form>

                    <div className="tarjeta-contacto">
                        <img src={imgContacto} alt="Imagen de contacto" />
                        <div className="footer-brand"  id='brand-form'>
                            <img alt="logo" title="Berkana Sports" src={logoicon} id='logoForm'/>
                            <p className="brand">Berkana{' '}<b className="letter-green">Sports</b></p>
                            <p>Equipamiento para Hogar y Gimnasios</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}