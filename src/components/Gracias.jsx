import React, { useEffect } from 'react'
import check from "../assets/check.png"
import { useHistory } from 'react-router-dom'

const Gracias = () => {

  const history = useHistory()
  
  useEffect(() => {
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      history.push('/')
    }, 3000)
  })

  return (
    <section className="gracias">
      <img src={check} alt="logo check"></img>
      <h1>¡ gracias !</h1>
      <h2>te contestaremos lo más pronto posible</h2>

    </section>
  )
}

export default Gracias