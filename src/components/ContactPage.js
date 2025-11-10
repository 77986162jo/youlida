import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Section Hero */}
      <header className="contact-hero">
        <h1>Contactez-nous</h1>
        <p>
          Vous avez une question, une idée de collaboration ou souhaitez en savoir plus ?  
          Nous serions ravis d’échanger avec vous.
        </p>
      </header>

      {/* Coordonnées */}
      <section className="contact-info">
        <div className="info-card">
          <div className="icon">📍</div>
          <h3>Adresse</h3>
          <p>Rue des Écoles, Casablanca, Maroc</p>
        </div>
        <div className="info-card">
          <div className="icon">📧</div>
          <h3>Email</h3>
          <p>contact@josueservicedigital.com</p>
        </div>
        <div className="info-card">
          <div className="icon">📞</div>
          <h3>Téléphone</h3>
          <p>+212 772 376 608</p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="contact-form-section">
        <h2>Envoyez-nous un message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Nom complet</label>
            <input type="text" placeholder="Votre nom" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Votre adresse email" required />
          </div>

          <div className="form-group">
            <label>Objet</label>
            <input type="text" placeholder="Sujet de votre message" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Votre message ici..." required></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Envoyer le message
          </button>
        </form>
      </section>

      {/* Section FAQ */}
      <section className="faq-section">
        <h2>Questions fréquentes</h2>
        <div className="faq-item">
          <h4>Comment puis-je devenir bénévole ?</h4>
          <p>
            Vous pouvez vous inscrire via notre page “S’impliquer” pour rejoindre notre équipe de volontaires.
          </p>
        </div>
        <div className="faq-item">
          <h4>Proposez-vous des stages ?</h4>
          <p>
            Oui, nous proposons des stages en communication, développement web et gestion de projet.
          </p>
        </div>
        <div className="faq-item">
          <h4>Comment faire un don ?</h4>
          <p>
            Vous pouvez faire un don sécurisé via notre plateforme de paiement disponible sur la page “Soutenir”.
          </p>
        </div>
      </section>
    </div>
  );
}
