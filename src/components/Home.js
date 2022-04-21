import React from "react";
import Categorias from "./Categorias";
import Destacados from "./Destacados";
import Features from "./Features";
import Slider from "./slider/Slider";


export default function Home() {
    return (
        <>
            <header>
                <Slider />
            </header>
            <Features />
            <Destacados />
            <Categorias />
        </>
    )
}