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
        Desenvolvimento de plataforma e-commerce para empresa de artesanato
        "TerArtes".
        <br />
        <br />
        Redução de Custo do Cliente (Host + CMS) para 0€, através do uso de
        Gatsby + ContentfulCMS + Netlify.
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
        Design e código para a empresa de limpeza têxtil "Washome", com layout
        responsivo e compatibilidade entre browsers.
        <br />
        <br />
        Inclui página de Detalhes, Formulário e Testemunhos em Carousel.
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
        Desenvolvimento e manutenção da plataforma web da empresa de ensino
        "Música em Si".
        <br />
        <br />
        Inclui landing pages, página de preçário e formulário multi-step.
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
        Aplicação Web que tira partido do API do Instituto Português do Mar e da
        Atmosfera.
        <br />
        <br />
        Previsão Meteorológica a 5 dias, com pesquisa por distrito e sugestões.
      </p>
    ),
    techUsed: "REACT.JS, React Hooks, context api, sass",
    github: "https://github.com/Juan-calero/my-Weather",
    site: "https://juan-calero.github.io/my-Weather/",
  },
]

export default projetosData
