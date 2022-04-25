import React from "react";
import { Link } from "react-router-dom";

export default function CardCategorias({ categoria, imagen }) {
    return (
        <div className="cardCategorias">
            <img src={imagen} alt="foto categoría"/>
            <Link to={`/categorias/${categoria}`} >{categoria}</Link>
        </div>
    )
}