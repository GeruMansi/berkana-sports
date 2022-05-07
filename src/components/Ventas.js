import React from "react";
import logo from "../assets/Logo.png"

export default function Ventas() {
    return (
        <section>
            <div className="header-ventas">
                <div className="capa-deg"></div>
                <div className="brand-ventas"><img src={logo} alt="logo" /><h2>{' '}Berkana <b className="letter-green">Sports</b></h2></div>
                <h2>VENTA MAYORISTA</h2>
                <h1>EQUIPAMIENTO<br/> DEPORTIVO</h1>
                <h3>Somos importadores líderes en equipamiento y accesorios deportivos.</h3>
                <div className="catalogoMayorista">
                    <a href="#nuestros_productos">NUESTROS PRODUCTOS</a>
                </div>
                <div>
                    <p>PAGÁ COMO VOS QUIERAS</p>
                    <p>ACEPTAMOS TODOS LOS MEDIOS DE PAGO</p>
                    <p>ENVÍOS A TODO EL PAÍS</p>
                </div>
            </div>

            <div></div>
            
            <div></div>
            <article id="nuestros_productos">
                segunda parte
            </article>
        </section>

    )
}