import React from "react"
import { cursorHoverBig, cursorHoverSmall } from "../utils/CursorHoverHandler"

function Center() {
  const enterMyFace = (e) => {
    const { style } = document.getElementById("myface")
    style.top = `${e.pageY}px`
    style.left = `${e.pageX}px`
    style.display = "block"
  }
  const leaveMyFace = () => {
    const { style } = document.getElementById("myface")
    style.display = "none"
  }
  return (
    <div className='fold__center'>
      <h1>
        {"Hello, I'm "}
        <strong
          className='fold__center--name'
          onMouseMove={(e) => enterMyFace(e)}
          onMouseLeave={() => leaveMyFace()}>
          Juan Calero
        </strong>
        ,<br /> Front-end web developer.
      </h1>
      <button
        onMouseEnter={cursorHoverBig}
        onMouseLeave={cursorHoverSmall}
        onClick={() => window.location.replace("/#sobre")}
        className='fold__btn'>
        Learn More {">"}
      </button>
    </div>
  )
}

export default Center
