import React from "react";
import logo from "../assets/Logo.png"
import image1 from "../assets/sogasMayorista.png"
import desktop from "../assets/pesasMayorista.png"
import mobile from "../assets/sentadillaMayorista.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

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

            <article id="nuestros_productos">
                <h2 className="nuestros_productos_h2">nuestros productos</h2>
                <div className="nuestros_productos_img">
                    <img src={image1} alt='ejercicio-sogas'></img>
                </div>

                <div className="calidad_precio">
                    <div className="calidad_precio_list">
                        <h2>LA MEJOR CALIDAD Y PRECIO</h2>
                        <ul>
                            <li><FontAwesomeIcon className="icon letter-green" icon={faCircleCheck}/>{" "} AMPLIO STOCK DE PRODUCTOS DE CALIDAD SUPERIOR TANTO NACIONALES COMO IMPORTADOS</li>
                            <li><FontAwesomeIcon className="icon letter-green" icon={faCircleCheck}/>{" "} PEDIDO MÍNIMO $ 20,000</li>
                            <li><FontAwesomeIcon className="icon letter-green" icon={faCircleCheck}/>{" "} ENTREGA DESDE 10 DÍAS</li>
                        </ul>
                        <a href="#">MÁS INFORMACIÓN</a>
                    </div>

                    <div className="calidad_precio_img">
                        <img src={desktop} alt="desktop" className="desktop"></img>
                        <img src={mobile} alt="mobile" className="mobile"></img>
                    </div>
                </div>
            </article>            
        </section>

    )
}