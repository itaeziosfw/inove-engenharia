import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Fale Conosco</h2>
      <p>Entre em contato pelo WhatsApp ou preencha o formulário abaixo:</p>

      <form className="contact-form">
        <input type="text" placeholder="Seu Nome" required />
        <input type="email" placeholder="Seu Email" required />
        <textarea placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>


    </section>
  );
};

export default Contact;
