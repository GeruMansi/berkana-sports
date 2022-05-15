import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Whatsapp = () => {
  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=5491172320149&text=Hola%20quisiera%20contactarme%20con%20ustedes!" class="float" target="_blank">
    <FontAwesomeIcon className="icon my-float" icon={faWhatsapp}/>
    </a>
    </>
  )
}

export default Whatsapp