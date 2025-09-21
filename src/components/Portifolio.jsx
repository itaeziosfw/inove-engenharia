import React, { useState } from "react";
import "../components/Portifolio.css";

// Imagens da obra Monte Hermon
import obra1a from "../assets/hermon/obra1a.jpg";
import obra1b from "../assets/hermon/obra1b.jpg";
import obra1c from "../assets/hermon/obra1c.jpg";
import obra1d from "../assets/hermon/obra1d.jpg";
import obra1e from "../assets/hermon/obra1e.jpg";
import obra1f from "../assets/hermon/obra1f.jpg";
import obra1g from "../assets/hermon/obra1g.jpg";
import obra1h from "../assets/hermon/obra1h.jpg";
import obra1i from "../assets/hermon/obra1i.jpg";
import obra1j from "../assets/hermon/obra1j.jpg";
import obra1k from "../assets/hermon/obra1k.jpg";

//imagens jardins do eden
import obra2a from "../assets/eden/obra2a.jpg";
import obra2b from "../assets/eden/obra2b.jpg";

// imagens  frigoias 

// Imagens da obra Frigoias
import obra3a from "../assets/frigoias/obra3a.jpg";
import obra3b from "../assets/frigoias/obra3b.jpg";
import obra3c from "../assets/frigoias/obra3c.jpg";
import obra3d from "../assets/frigoias/obra3d.jpg";
import obra3e from "../assets/frigoias/obra3e.jpg";
import obra3f from "../assets/frigoias/obra3f.jpg";
import obra3g from "../assets/frigoias/obra3g.jpg";
import obra3h from "../assets/frigoias/obra3h.jpg";
import obra3i from "../assets/frigoias/obra3i.jpg";
import obra3j from "../assets/frigoias/obra3j.jpg";
import obra3k from "../assets/frigoias/obra3k.jpg";
import obra3l from "../assets/frigoias/obra3l.jpg";
import obra3m from "../assets/frigoias/obra3m.jpg";
import obra3n from "../assets/frigoias/obra3n.jpg";
import obra3o from "../assets/frigoias/obra3o.jpg";

// Imagens da obra Eco Niteroi
import obra4a from "../assets/eco1/obra4a.jpg";
import obra4b from "../assets/eco1/obra4b.jpg";
import obra4c from "../assets/eco1/obra4c.jpg";
import obra4d from "../assets/eco1/obra4d.jpg";
import obra4e from "../assets/eco1/obra4e.jpg";
import obra4f from "../assets/eco1/obra4f.jpg";
import obra4g from "../assets/eco1/obra4g.jpg";

// Imagens da obra Escritório
import obra5a from "../assets/escritorio/obra5a.jpg";
import obra5b from "../assets/escritorio/obra5b.jpg";
import obra5c from "../assets/escritorio/obra5c.jpg";
import obra5d from "../assets/escritorio/obra5d.jpg";
import obra5e from "../assets/escritorio/obra5e.jpg";
import obra5f from "../assets/escritorio/obra5f.jpg";

// Imagens da obra Casa Anaville
import obra6a from "../assets/casaanaville/obra6a.jpg";
import obra6b from "../assets/casaanaville/obra6b.jpg";
import obra6c from "../assets/casaanaville/obra6c.jpg";
import obra6d from "../assets/casaanaville/obra6d.jpg";
import obra6e from "../assets/casaanaville/obra6e.jpg";
import obra6f from "../assets/casaanaville/obra6f.jpg";

// Imagens da obra Casa Alphaville
import obra7a from "../assets/casaalfaville/obra7a.jpg";
import obra7b from "../assets/casaalfaville/obra7b.jpg";
import obra7c from "../assets/casaalfaville/obra7c.jpg";
import obra7d from "../assets/casaalfaville/obra7d.jpg";
import obra7e from "../assets/casaalfaville/obra7e.jpg";

// Imagens da obra Econoroeste
import obra8a from "../assets/econoroeste/obra8a.jpg";
import obra8b from "../assets/econoroeste/obra8b.jpg";
import obra8c from "../assets/econoroeste/obra8c.jpg";
import obra8d from "../assets/econoroeste/obra8d.jpg";
import obra8e from "../assets/econoroeste/obra8e.jpg";
import obra8f from "../assets/econoroeste/obra8f.jpg";
import obra8g from "../assets/econoroeste/obra8g.jpg";
import obra8h from "../assets/econoroeste/obra8h.jpg";
import obra8i from "../assets/econoroeste/obra8i.jpg";
import obra8j from "../assets/econoroeste/obra8j.jpg";



const OBRAS = [
  {
    titulo: "Monte Hermon",
    cliente: "EGECON",
    cidade: "Anápolis/GO",
    descricao: "Pintura de Fachada Textura, Apartamentos",
    imagens: [
      obra1a, obra1b, obra1c, obra1d, obra1e,
      obra1f, obra1g, obra1h, obra1i, obra1j, obra1k
    ],
  },
{
    titulo: "Jardins do Eden",
    cliente: "EGECON",
    cidade: "Anápolis/GO",
    descricao: "Pintura de Fachada Textura, Apartamentos",
    imagens: [
   obra2a, obra2b,
    ],
  },

{
  titulo: "Frigoias – Estrutura Metálica",
  cliente: "Frigoias",
  cidade: "Anápolis/GO",
  descricao: "Tratamento anticorrosivo e pintura estrutural completa.",
  imagens: [
    obra3a, obra3b, obra3c, obra3d, obra3e, obra3f, obra3g, obra3h,
    obra3i, obra3j, obra3k, obra3l, obra3m, obra3n, obra3o
  ],
},

{
  titulo: "Eco Niterói",
  cliente: "Ecovias",
  cidade: "Niterói/RJ",
  descricao: "Pintura de fachada e áreas internas do prédio.",
  imagens: [
    obra4a, obra4b, obra4c, obra4d, obra4e,
    obra4f, obra4g
  ],
},

{
  titulo: "Escritório GENESIS OFFICE",
  cliente: "ENGECON",
  cidade: "Anápolis/GO",
  descricao: "Pintura de áreas internas de escritório corporativo.",
  imagens: [
    obra5a, obra5b, obra5c, obra5d, obra5e, obra5f
  ],
},

{
  titulo: "Casa Anaville",
  cliente: "Residencial Anaville",
  cidade: "Anápolis/GO",
  descricao: "Pintura externa de residência de alto padrão.",
  imagens: [
    obra6a, obra6b, obra6c, obra6d, obra6e, obra6f
  ],
},

{
  titulo: "Casa Alphaville",
  cliente: "Residencial Alphaville",
  cidade: "Anápolis/GO",
  descricao: "Pintura externa de residência moderna em condomínio fechado.",
  imagens: [
    obra7a, obra7b, obra7c, obra7d, obra7e
  ],
},

{
  titulo: "Eco noroeste",
  cliente: "Ecovias",
  cidade: "Matão/SP",
  descricao: "Pintura de fachada com acabamento premium e áreas externas.",
  imagens: [
    obra8a, obra8b, obra8c, obra8d, obra8e,
    obra8f, obra8g, obra8h, obra8i, obra8j
  ],
},



];


const Portfolio = () => {
  const [obraSelecionada, setObraSelecionada] = useState(null);
  const [fotoAtual, setFotoAtual] = useState(0);

  const abrirObra = (obra) => {
    setObraSelecionada(obra);
    setFotoAtual(0);
  };

  const fecharObra = () => {
    setObraSelecionada(null);
  };

  const proximaFoto = () => {
    setFotoAtual((prev) =>
      prev === obraSelecionada.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const fotoAnterior = () => {
    setFotoAtual((prev) =>
      prev === 0 ? obraSelecionada.imagens.length - 1 : prev - 1
    );
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2>Empreendimentos Realizados</h2>
      <div className="portfolio-grid">
        {OBRAS.map((obra, index) => (
          <div
            key={index}
            className="obra-card"
            onClick={() => abrirObra(obra)}
          >
            <img src={obra.imagens[0]} alt={obra.titulo} />
            <div className="obra-info">
              <h3>{obra.titulo}</h3>
              <p><strong>Cliente:</strong> {obra.cliente}</p>
              <p><strong>Cidade:</strong> {obra.cidade}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal com carousel */}
      {obraSelecionada && (
        <div className="modal-overlay" onClick={fecharObra}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // impedir fechar ao clicar dentro
          >
            <span className="close-btn" onClick={fecharObra}>
              &times;
            </span>

            <h3>{obraSelecionada.titulo}</h3>
            <p>{obraSelecionada.descricao}</p>

            <div className="carousel-modal">
              <button className="nav prev" onClick={fotoAnterior}>
                ‹
              </button>
              <img
                src={obraSelecionada.imagens[fotoAtual]}
                alt={`Foto ${fotoAtual + 1}`}
              />
              <button className="nav next" onClick={proximaFoto}>
                ›
              </button>
            </div>

            <div className="dots">
              {obraSelecionada.imagens.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === fotoAtual ? "active" : ""}`}
                  onClick={() => setFotoAtual(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
