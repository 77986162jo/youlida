import React, { useState } from "react";
import "./GetInvolvedPage.css";

export default function GetInvolvedPage() {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>S’impliquer</h1>
          <p>
            Rejoignez-nous pour créer un impact durable dans la vie des jeunes africains.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="ways">
        <div className="container">
          <h2>Comment vous impliquer</h2>
          <p>Plusieurs façons de contribuer à notre mission :</p>
          <div className="cards">
            <div className="card">
              <h3>Bénévolat</h3>
              <p>Donnez de votre temps et compétences pour nos programmes.</p>
            </div>
            <div className="card">
              <h3>Dons</h3>
              <p>Soutenez financièrement nos actions sur le terrain.</p>
            </div>
            <div className="card">
              <h3>Partenariats</h3>
              <p>Collaborez avec nous en tant qu’organisation.</p>
            </div>
            <div className="card">
              <h3>Parrainage</h3>
              <p>Parrainez un jeune ou un programme spécifique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="form-section">
        <div className="container">
          <h2>Devenir bénévole</h2>
          <p>Remplissez ce formulaire pour rejoindre notre équipe.</p>

          {volunteerSubmitted ? (
            <div className="success-box">
              <h3>Merci pour votre engagement !</h3>
              <p>
                Votre candidature a été reçue. Notre équipe vous contactera bientôt.
              </p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit}>
              <div className="row">
                <input type="text" placeholder="Prénom *" required />
                <input type="text" placeholder="Nom *" required />
              </div>
              <div className="row">
                <input type="email" placeholder="Email *" required />
                <input type="tel" placeholder="Téléphone *" required />
              </div>
              <div className="row">
                <input type="text" placeholder="Pays *" required />
                <input type="text" placeholder="Ville *" required />
              </div>
              <textarea
                rows="4"
                placeholder="Pourquoi souhaitez-vous devenir bénévole ? *"
                required
              ></textarea>
              <button type="submit" className="btn">
                Soumettre ma candidature
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Donations */}
      <section className="donations">
        <div className="container">
          <h2>Faire un don</h2>
          <div className="don-grid">
            <div className="don-card">
              <h3>Don ponctuel</h3>
              <p>25€ — Fournitures scolaires pour 5 jeunes</p>
              <button>Donner 25€</button>
            </div>
            <div className="don-card">
              <h3>Don mensuel</h3>
              <p>50€ — Parrainer un atelier mensuel</p>
              <button>Donner 50€/mois</button>
            </div>
            <div className="don-card">
              <h3>Don personnalisé</h3>
              <p>Choisissez votre montant libre</p>
              <button>Montant libre</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ensemble, créons l’avenir</h2>
          <p>
            Chaque contribution, qu’elle soit en temps, en compétences ou financière, fait une réelle différence.
          </p>
          <a href="/contact" className="btn-outline">
            Parlons de votre projet
          </a>
        </div>
      </section>
    </div>
  );
}
