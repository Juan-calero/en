import React from "react"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"
import { email, phone } from "../utils/utils"
import curriculo from "../../CV/ENGLISH CV.pdf"

export default function ContatoText() {
  return (
    <div className='contatoContent'>
      <h2>Contacts</h2>
      <p>
        {`Did I grab your interest?

        Let's talk. I'll pay for the coffee.
        
        I bring my experience to the table where we can work together to solve real problems in a way that optimizes our respective experiences and knowledge.
       
        Contact me:
        `}
        <a
          className='contatoContent__text--anchor'
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          href={`tel:+351${phone}`}>
          +351 {phone}
        </a>
        <a
          className='contatoContent__text--anchor'
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          href={`mailto:${email}`}>
          {email}
        </a>
      </p>
      <a tabIndex='-1' href={curriculo} download='Juan Calero CV.pdf'>
        <button
          onMouseEnter={cursorHoverBig}
          onMouseLeave={cursorHoverSmall}
          className='btn'>
          Download CV
        </button>
      </a>
    </div>
  )
}
