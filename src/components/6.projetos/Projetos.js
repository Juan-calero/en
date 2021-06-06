import React from "react";
import ProjetoItem from "./ProjetoItem";
import projetosData from "../utils/projetosData";

function Projetos() {
  const projetoComponents = projetosData.map((projeto, index) => {
    return <ProjetoItem id={index} {...projeto} />;
  });

  return (
    <section id="projetos" className="projetos">
      <h2 data-aos="fade-in">Projetos</h2>
      <div className="projetos__items">{projetoComponents}</div>;
    </section>
  );
}

export default Projetos;
