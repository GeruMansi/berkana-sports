import React from "react";

export default function CardProductos({ item }) {
    return (
        <div className="cardProductos">
            <img src={item.img} alt="foto del producto" />
            <p>{item.title}</p>
            <a href="#">COMPRAR</a>
        </div>
    )
}