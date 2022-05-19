import React from 'react'
import check from "../assets/check.png"
// import { Redirect } from "react-router-dom";

const Gracias = () => {
  // setTimeout(() => {
  //   <Redirect to="/" />
  // }, 5000);
  return (
    <section className="gracias">
      <img src={check} alt="logo check"></img>
      <h1>¡ gracias !</h1>
      <h2>te contestaremos lo más pronto posible</h2>

    </section>
  )
}

export default Gracias