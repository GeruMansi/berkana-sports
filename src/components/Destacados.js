import React from "react";
import CardProductos from "./CardProductos";

export default function Destacados() {
    return (
        <section className="destacados">
            <h3>NUESTROS DESTACADOS</h3>
            <p>acá va el carousel con los productos</p>
            <CardProductos />
        </section>
    )
}