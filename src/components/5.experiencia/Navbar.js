import React from "react"

function Navbar({ setSkill, skill }) {
  return (
    <div className='skills__navbar'>
      <button
        tabIndex='0'
        onClick={() => {
          setSkill(0)
        }}
        className={!skill ? "skills__active" : "skills__navbar--p"}>
        Code
      </button>
      <button
        tabIndex='0'
        onClick={() => {
          setSkill(1)
        }}
        className={skill === 1 ? "skills__active" : "skills__navbar--p"}>
        Design
      </button>
      <button
        tabIndex='0'
        onClick={() => {
          setSkill(2)
        }}
        className={skill === 2 ? "skills__active" : "skills__navbar--p"}>
        Tools
      </button>
    </div>
  )
}

export default Navbar
