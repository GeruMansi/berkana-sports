import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoNavbar.png'

export default function Navbar() {
    return (
        <nav>
            <p><img src={logo} alt="logo" />{' '}Berkana <b className="">Sports</b></p>
            <ul>
                <li><NavLink exact to={'/'} activeClassName="currentRoute">INICIO</NavLink></li>
                <li>PRODUCTOS</li>
                <li><NavLink to={'/catalogo'} activeClassName="currentRoute">CATÁLOGO</NavLink></li>
                <li><NavLink to={'/quienes-somos'} activeClassName="currentRoute">QUIÉNES SOMOS</NavLink></li>
                <li><NavLink to={'/ventas-mayoristas'} activeClassName="currentRoute">VENTAS MAYORISTAS</NavLink></li>
                <li><NavLink to={'/contacto-envios'} activeClassName="currentRoute">CONTACTO Y ENVÍOS</NavLink></li>
                <li>
                    <a href='https://instagram.com/berkana_sports' target={'_blank'} rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} />{' '}</a>
                    <a href='https://facebook.com/berkana.sports' target={'_blank'} rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a>
                </li>
            </ul>
        </nav>
    )
}