import React from "react"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function NavBar() {
  return (
    <nav>
      <ol
        className='fold__navbar'
        onMouseEnter={cursorHoverBig}
        onMouseLeave={cursorHoverSmall}>
        <li>
          <a href='#sobre'>About</a>
        </li>
        <li>
          <a href='#o_Que_Faço'>What I do</a>
        </li>
        <li>
          <a href='#experiência'>Experience</a>
        </li>
        <li>
          <a href='#projetos'>Work</a>
        </li>
        <button
          onClick={() => window.location.replace("/#contato")}
          className='btn'>
          Contacts
        </button>
      </ol>
    </nav>
  )
}

export default NavBar
