import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <p>logo</p>
            <ul>
                <li><NavLink exact to={'/'} activeClassName="currentRoute">INICIO</NavLink></li>
                <li>PRODUCTOS</li>
                <li><NavLink to={'/catalogo'} activeClassName="currentRoute">CATÁLOGO</NavLink></li>
                <li><NavLink to={'/quienes-somos'} activeClassName="currentRoute">QUIÉNES SOMOS</NavLink></li>
                <li><NavLink to={'/ventas-mayoristas'} activeClassName="currentRoute">VENTAS MAYORISTAS</NavLink></li>
                <li><NavLink to={'/contacto-envios'} activeClassName="currentRoute">CONTACTO Y ENVÍOS</NavLink></li>
                <li>
                    <a href='https://instagram.com/berkana_sports' target={'_blank'} rel="noreferrer">instagram</a>
                    <a href='https://facebook.com/berkana.sports' target={'_blank'} rel="noreferrer">facebook</a>
                </li>
            </ul>
        </nav>
    )
}