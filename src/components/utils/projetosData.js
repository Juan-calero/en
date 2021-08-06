import React from "react"
import PrintMusicaEmSi from "../../img/musicaemsiprint.webp"
import PrintWashome from "../../img/washome screenshot.webp"
import PrintTerArtes from "../../img/TerArtesPrint.jpg"
import PrintWeather from "../../img/WeatherPrint.jpg"

const projetosData = [
  {
    img: PrintTerArtes,
    title: "TerArtes",
    content: (
      <p>
        Development of e-commerce platform for <i>TerArtes'</i> craft company.
        <br />
        <br />
        Customer Cost Reduction (Host + CMS) to €0, through the use of Gatsby +
        ContentfulCMS + Netlify.
      </p>
    ),
    techUsed: "GATSBY, GRAPHQL, COMMERCE.JS, SASS, JSX",
    site: "https://terartes.netlify.app/",
  },
  {
    img: PrintWashome,
    title: "Washome",
    content: (
      <p>
        Design and website development for the textile cleaning company{" "}
        <i>Washome</i>, with responsive layout and browser compatibility.
        <br />
        <br />
        Includes Details page, Form and Carousel Testimonials.
      </p>
    ),
    techUsed: "REACT.JS, SaSS, JaVaSCRIPT",
    github: "https://github.com/Juan-calero/Washome",
    site: "http://www.washome.pt/",
  },
  {
    img: PrintMusicaEmSi,
    title: "Música em Si",
    content: (
      <p>
        Development and maintenance of the educational company{" "}
        <i>Música em Si'</i>s web platform .
        <br />
        <br />
        Includes landing pages, pricing page and multi-step form.
      </p>
    ),
    techUsed: "Wix, Corvid",
    site: "https://www.musicaemsi.com/",
  },
  {
    img: PrintWeather,
    title: "Weather App",
    content: (
      <p>
        Web app that uses the <i>Instituto Português do Mar e da Atmosfera's</i>{" "}
        API .
        <br />
        <br />
        5-day weather forecast, with search queries suggestions sorted by
        Portuguese districts/islands.
      </p>
    ),
    techUsed: "REACT.JS, React Hooks, context api, sass",
    github: "https://github.com/Juan-calero/my-Weather",
    site: "https://juan-calero.github.io/my-Weather/",
  },
]

export default projetosData
