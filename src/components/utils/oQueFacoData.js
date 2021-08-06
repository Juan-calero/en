import Gears from "../../icons/gears_icon.webp"
import Design from "../../icons/design_icon.webp"
import Hands from "../../icons/envolvimento_icon.webp"
import React from "react"

const oQueFacoData = [
  {
    title: "Development",
    content: (
      <p>
        Passionate about front-end development, I produce simple, clean and
        readable code on a daily basis, which can be used by others and enhanced
        to create exceptional software.
      </p>
    ),
    src: Gears,
  },
  {
    title: "Design",
    content: (
      <p>
        Design is more than the final look of a product.
        <br />
        It requires great attention to detail, to its internal functionality and
        to the user's interaction to create a memorable experience.
      </p>
    ),
    src: Design,
  },
  {
    title: "Collaboration",
    content: (
      <p>
        I listen to the client's needs and collaborate with the team in order to
        enhance the work and generate results.
      </p>
    ),
    src: Hands,
  },
]
export default oQueFacoData
