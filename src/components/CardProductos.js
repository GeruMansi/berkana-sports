import React from "react";

export default function CardProductos({ item }) {
    return (
        <div className="cardProductos">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <a href={item.linkWapp} target="_blank">COMPRAR</a>
        </div>
    )
}