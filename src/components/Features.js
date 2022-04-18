import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faCreditCard, faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Features() {
    return (
        <section className="features">
            <div>
                <FontAwesomeIcon icon={faDumbbell} />
                <p>TODO LO QUE NECESITÁS PARA INICIAR EL CAMBIO QUE DESEÁS EN UN SOLO LUGAR</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faCreditCard} />
                <p>PAGÁ COMO VOS QUIERAS</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faTruckFast} />
                <p>ENVÍOS A TODO EL PAÍS</p>
            </div>
        </section>
    )
}