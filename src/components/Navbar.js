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
                        <li><Link>Ver todos los productos</Link></li>
                        <li><Link>Accesorios</Link></li>
                        <li><Link>Baseball</Link></li>
                        <li><Link>Básquet</Link></li>
                        <li><Link>Boxeo / artes marciales</Link></li>
                        <li><Link>educación física</Link></li>
                        <li><Link>entrenamiento funcional</Link></li>
                        <li><Link>fútbol</Link></li>
                        <li><Link>gimnasia rítmica</Link></li>
                        <li><Link>gimansio</Link></li>
                        <li><Link>handball</Link></li>
                        <li><Link>hockey</Link></li>
                        <li><Link>kinesiología</Link></li>
                        <li><Link>natación</Link></li>
                        <li><Link>pilates / yoga</Link></li>
                        <li><Link>tenis</Link></li>
                        <li><Link>voley</Link></li>
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