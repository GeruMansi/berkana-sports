import React from "react";
import CardCategorias from "./CardCategorias";
import gimnasio from "../assets/gimnasio.png";
import boxeo from "../assets/boxeo.png";
import futbol from "../assets/futbol.png"
import basquet from "../assets/basquet.png"

export default function Categorías() {
    return (
        <section className="categorias">
            <h3>CATEGORÍAS</h3>

            <div className="cardContainer">
                <CardCategorias categoria={"gimnasio"} imagen={gimnasio} />
                <CardCategorias categoria={"boxeo"} imagen={boxeo} />
                <CardCategorias categoria={"futbol"} imagen={futbol} />
                <CardCategorias categoria={"basquet"} imagen={basquet} />
            </div>
        </section>
    )
}