import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const servicos = [
    {
      id: "residencial",
      titulo: "🏠 Pintura Residencial",
      descricao:
        "A pintura residencial é realizada com materiais de alta qualidade, garantindo durabilidade e acabamento sofisticado. Utilizamos técnicas modernas para ambientes internos e externos."
    },
    {
      id: "comercial",
      titulo: "🏢 Pintura Comercial",
      descricao:
        "Nossa pintura comercial é ideal para empresas que buscam renovar seu espaço com agilidade e eficiência, sem comprometer o funcionamento do negócio."
    },
    {
      id: "texturas",
      titulo: "🎨 Texturas e Grafiato",
      descricao:
        "Aplicamos texturas decorativas e grafiato que trazem sofisticação e estilo, oferecendo resistência e fácil manutenção."
    },
    {
      id: "impermeabilizacao",
      titulo: "🛡️ Impermeabilização",
      descricao:
        "O serviço de impermeabilização é essencial para proteger paredes e lajes contra infiltrações, garantindo a segurança da sua construção."
    },
    {
      id: "reformas",
      titulo: "🛠️ Engenharia e Reformas",
      descricao:
        "Realizamos reformas completas com planejamento detalhado, mão de obra qualificada e acompanhamento técnico especializado."
    }
  ];

  return (
    <section className="services" id="services">
      <h2>Nossos Serviços</h2>
      <div className="services-buttons">
        {servicos.map((s) => (
          <button
            key={s.id}
            className={servicoSelecionado === s.id ? "ativo" : ""}
            onClick={() => setServicoSelecionado(s.id)}
          >
            {s.titulo}
          </button>
        ))}
      </div>

      {/* Exibe descrição do serviço selecionado */}
      <div className="services-conteudo">
        {servicoSelecionado ? (
          <p>{servicos.find((s) => s.id === servicoSelecionado).descricao}</p>
        ) : (
          <p>Selecione um serviço para ver mais detalhes.</p>
        )}
      </div>
    </section>
  );
};

export default Services;
