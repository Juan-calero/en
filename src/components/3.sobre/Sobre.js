import React from "react"
import Brain from "../../icons/brain_neon.webp"
import SobreTitle from "./SobreTitle"

function Sobre() {
  return (
    <section id='sobre' className='sobre'>
      <img data-aos='fade' src={Brain} alt='Cérebro Neon' loading='lazy' />
      <SobreTitle />
      <p data-aos='fade' data-aos-offset='140'>
        Energetic Front-end developer based in Sintra, Portugal, with{" "}
        <b>2+ years</b> of experience{" "}
        <b>designing and developing high quality websites.</b>
        <br /> <br />
        <b>I've reduced costumer's costs</b> (Host + CMS) to 0€ for TerArtes'
        craft company <b>and raised client's conversion </b> to 75% at Música em
        Si.
        <br /> <br />
        <b>I love new challenges and thrive to better myself everyday.</b>
        <br /> <br />
      </p>
    </section>
  )
}

export default Sobre
