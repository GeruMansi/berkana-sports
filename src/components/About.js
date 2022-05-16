import React from "react";
import logo from "../assets/Logo.png";

export default function About() {
    return (
        <section className="seccionAbout">
            <article>
                <img src={logo} alt="logo"/>
                <h2>nuestros valores</h2>
                <p>
                    cada persona nace con un potencial que se debe desarrollar. en berkana sports&#174; queremos ayudarte a que lo liberes.<br/>
                    hemos evolucionado a través del tiempo, manteniendo nuestro compromiso con los clientes.<br/>
                    buscamos ofrecerte el mejor equipo para todo tipo de deporte y entrenamiento. nuestra tienda online ofrece una amplia variedad de artículos, incluyendo pesas, pelotas, equipo y mucho más.
                </p>
                <p className="letter-green">navegá por nuestro sitio web y mirá todo lo que tenemos para vos.</p>
            </article>
        </section>
    )
}