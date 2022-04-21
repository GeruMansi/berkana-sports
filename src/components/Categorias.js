import React from "react";
import CardCategorias from "./CardCategorias";

export default function Categorías() {
    return (
        <section className="categorias">
            <h3>CATEGORÍAS</h3>

            <div className="cardContainer">
                <CardCategorias />
                <CardCategorias />
                <CardCategorias />
                <CardCategorias />
            </div>
        </section>
    )
}