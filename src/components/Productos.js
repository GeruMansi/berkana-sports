import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CardProductos from "./CardProductos";
import { dataProductos } from "./data-productos";

export default function Productos() {

    const listaCategorias = [
        {
            name: 'Ver todos',
            path: ''
        },
        {
            name: 'Accesorios',
            path: 'accesorios'
        },
        {
            name: 'Baseball',
            path: 'baseball'
        },
        {
            name: 'Básquet',
            path: 'basquet'
        },
        {
            name: 'Boxeo/Artes Marciales',
            path: 'boxeo'
        },
        {
            name: 'Ed. Física',
            path: 'educacion-fisica'
        },
        {
            name: 'Entrenam. Funcional',
            path: 'entrenamiento-funcional'
        },
        {
            name: 'Fútbol',
            path: 'futbol'
        },
        {
            name: 'Gimnasia Rítmica',
            path: 'gimnasia-ritmica'
        },
        {
            name: 'Gimnasio',
            path: 'gimnasio'
        },
        {
            name: 'Handball',
            path: 'handball'
        },
        {
            name: 'Hockey',
            path: 'hockey'
        },
        {
            name: 'Kinesiología',
            path: 'kinesiologia'
        },
        {
            name: 'Natación',
            path: 'natacion'
        },
        {
            name: 'Pilates/Yoga',
            path: 'pilates-yoga'
        },
        {
            name: 'Tenis',
            path: 'tenis'
        },
        {
            name: 'Vóley',
            path: 'voley'
        }
    ]

    const { catId } = useParams()

    const [productosFiltrados, setProductosFiltrados] = useState([])

    useEffect(() => {
        catId ? setProductosFiltrados(dataProductos.filter(item => item.category === catId)) : setProductosFiltrados(dataProductos)
        console.log(catId)
    }, [catId])

    return (
        <section className="seccionProductos">
            <h1 style={{color: '#fff'}}>PRODUCTOS</h1>
            
            <ul>
                {listaCategorias.map(item => {
                    return <li key={item.path}><NavLink exact to={`/productos/${item.path}`} activeClassName="categoriaActual">{item.name}</NavLink></li>
                })}
            </ul>

            <div className="listaProductos">
                {productosFiltrados.map(item => (
                    <CardProductos item={item} />
                ))}
            </div>
        </section>
    )
}