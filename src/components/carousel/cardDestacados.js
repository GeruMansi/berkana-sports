import React from 'react'

const CardDestacados = ({product}) => {
  return (
    <div className="cardDestacado">
        <img src={product.img} alt={product.title} />
        <div>
        <h4>{product.name}</h4>
        <p>{product.title}</p>
        </div>
        <a href={product.linkWapp} target="_blank">COMPRAR</a>
    </div>
  )
}

export default CardDestacados