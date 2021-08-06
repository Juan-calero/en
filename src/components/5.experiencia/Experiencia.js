import React, { useState } from "react"
import { empresas } from "../utils/utils"
import Ferramentas from "./Ferramentas"
import Navbar from "./Navbar"

function Experiencia() {
  const [skill, setSkill] = useState(0)
  const map = empresas.map(({ name, src }, index) => {
    return (
      <li key={index}>
        <img src={src} alt={`Logo ${name}`} loading='lazy' />
      </li>
    )
  })

  return (
    <section id='experiência' className='experiencia'>
      <h2 data-aos='fade'>Experience</h2>
      <div className='experiencia__components'>
        <article data-aos='fade-up' className='empresas'>
          <h3>Companies</h3>
          <ul className='empresas__logo'>{map}</ul>
        </article>
        <article data-aos='fade' className='skills'>
          <h3>skills</h3>
          <div className='skills__content'>
            <Navbar setSkill={setSkill} skill={skill} />
            <Ferramentas skill={skill} />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experiencia
