import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logoNavbar.png'

export default function Navbar() {
    return (
        <nav>
            <p><img src={logo} alt="logo" />{' '}Berkana <b className="letter-green">Sports</b></p>
            <ul>
                <li><NavLink exact to={'/'} activeClassName="currentRoute">INICIO</NavLink></li>
                <li className='submenuProductos'>
                    PRODUCTOS <FontAwesomeIcon icon={faAngleDown} />

                    <ul className='listaProductos'>
                        <li><Link to={'/productos/'}>Ver todos los productos</Link></li>
                        <li><Link to={'/productos/accesorios'}>Accesorios</Link></li>
                        <li><Link to={'/productos/baseball'}>Baseball</Link></li>
                        <li><Link to={'/productos/basquet'}>Básquet</Link></li>
                        <li><Link to={'/productos/boxeo'}>Boxeo / artes marciales</Link></li>
                        <li><Link to={'/productos/educacion-fisica'}>educación física</Link></li>
                        <li><Link to={'/productos/entrenamiento-funcional'}>entrenamiento funcional</Link></li>
                        <li><Link to={'/productos/futbol'}>fútbol</Link></li>
                        <li><Link to={'/productos/gimnasia-ritmica'}>gimnasia rítmica</Link></li>
                        <li><Link to={'/productos/gimnasio'}>gimansio</Link></li>
                        <li><Link to={'/productos/handball'}>handball</Link></li>
                        <li><Link to={'/productos/hockey'}>hockey</Link></li>
                        <li><Link to={'/productos/kinesiologia'}>kinesiología</Link></li>
                        <li><Link to={'/productos/natacion'}>natación</Link></li>
                        <li><Link to={'/productos/pilates-yoga'}>pilates / yoga</Link></li>
                        <li><Link to={'/productos/tenis'}>tenis</Link></li>
                        <li><Link to={'/productos/voley'}>voley</Link></li>
                    </ul>
                </li>
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