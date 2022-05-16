import React from "react";
import pesas from "../assets/pesas.png"
import tarjeta from "../assets/tarjeta.png"
import transporte from "../assets/transporte.png"

export default function Features() {
    return (
        <section className="features">
            <div>
                <img src={pesas} alt="pesas"/>
                <p>TODO LO QUE NECESITÁS PARA INICIAR EL CAMBIO QUE DESEÁS EN UN SOLO LUGAR</p>
            </div>
            <div>
                <img src={tarjeta} alt="tarjeta"/>
                <p>PAGÁ COMO VOS QUIERAS</p>
            </div>
            <div>
                <img src={transporte} alt="transporte"/>
                <p>ENVÍOS A TODO EL PAÍS</p>
            </div>
        </section>
    )
}