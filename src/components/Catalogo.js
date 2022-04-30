import React from "react";
import logo from '../assets/logoNavbar.png'
import imgContacto from '../assets/contacto.png'

export default function Catalogo() {
    return (
        <>
            <section className="seccionCatalogo">
                <article className="catalogoDescarga">
                    <img src={logo} />
                    <h2>DESCARGÁ NUESTRO CATÁLOGO</h2>
                    <a>descargar</a>
                </article>

                <article className="catalogoPedido">
                    <h2>HACENOS TU PEDIDO</h2>
                    <p>completá el formulario online o contactanos a través de los siguientes canales</p>
                    <div>
                        <a href="#" className="catalogoWhatsapp">WhatsApp</a>
                        <a href="#" className="catalogoMail">berkanasports@gmail.com</a>
                    </div>
                </article>
                
                <article className="catalogoFormulario">
                    <form>
                        <h3>FORMULARIO ONLINE</h3>
                        <p>Completá la siguiente información</p>
                            
                        <div className="inputContainer">
                            <label htmlFor="formNombre">Nombre*</label>
                            <input type={"text"} id="formNombre" required/>
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="formEmail">Email*</label>
                            <input type={"email"} id="formEmail" required/>
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="formTelefono">Teléfono de contacto</label>
                            <input type={"tel"} id="formTelefono"/>
                        </div>

                        <div className="inputContainer">
                            <label htmlFor="formMensaje">Mensaje</label>
                            <textarea id="formMensaje"/>
                        </div>

                        <button>cotizar</button>
                    </form>

                    <div>
                        <img src={imgContacto} />
                    </div>
                </article>
            </section>
        </>
    )
}