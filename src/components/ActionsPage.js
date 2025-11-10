import React from "react";
import "./ActionsPage.css";

export default function ActionsPage() {
  return (
    <div className="programs-page">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Nos Actions</h1>
        <p className="header-subtitle">
          Des programmes innovants pour transformer la vie des jeunes africains
        </p>
      </header>

      {/* Section Éducation */}
      <section className="program-section">
        <div className="program-content">
          <div className="program-text">
            <h2 className="program-title">Programme Éducation</h2>
            <p className="program-description">
              Nous accompagnons les jeunes dans leurs choix éducatifs et
              professionnels à travers des ateliers d'orientation, du mentorat
              et des bourses d'études.
            </p>
            <ul className="program-list">
              <li>
                <strong>Ateliers d'orientation :</strong> Découvrir les métiers
                et filières d'études
              </li>
              <li>
                <strong>Mentorat académique :</strong> Accompagnement par des
                professionnels et étudiants
              </li>
              <li>
                <strong>Bourses d'études :</strong> Soutien financier pour les
                jeunes méritants
              </li>
            </ul>
            <div className="program-stats">
              <div>
                <h3>2,500+</h3>
                <p>Jeunes orientés</p>
              </div>
              <div>
                <h3>150</h3>
                <p>Bourses attribuées</p>
              </div>
            </div>
          </div>
          <div className="program-image">
            <img
              src="/african-students-studying-together-in-classroom.jpg"
              alt="Programme Éducation"
            />
          </div>
        </div>
      </section>

      {/* Section Santé */}
      <section className="program-section alt">
        <div className="program-content">
          <div className="program-image">
            <img
              src="/african-youth-health-education-workshop.jpg"
              alt="Programme Santé"
            />
          </div>
          <div className="program-text">
            <h2 className="program-title">Programme Santé</h2>
            <p className="program-description">
              Des programmes de sensibilisation et d'éducation sur la santé
              reproductive, la prévention des IST et le bien-être mental.
            </p>
            <ul className="program-list">
              <li>Éducation sexuelle complète</li>
              <li>Prévention VIH/SIDA</li>
              <li>Soutien psychologique</li>
            </ul>
            <div className="program-stats">
              <div>
                <h3>8,000+</h3>
                <p>Jeunes sensibilisés</p>
              </div>
              <div>
                <h3>45</h3>
                <p>Ateliers organisés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Leadership */}
      <section className="program-section">
        <div className="program-content">
          <div className="program-text">
            <h2 className="program-title">Programme Leadership</h2>
            <p className="program-description">
              Développer les compétences en leadership, entrepreneuriat et
              engagement civique pour former la prochaine génération de leaders
              africains.
            </p>
            <ul className="program-list">
              <li>Camps de leadership</li>
              <li>Entrepreneuriat jeunesse</li>
              <li>Engagement civique</li>
            </ul>
            <div className="program-stats">
              <div>
                <h3>500+</h3>
                <p>Leaders formés</p>
              </div>
              <div>
                <h3>80</h3>
                <p>Projets lancés</p>
              </div>
            </div>
          </div>
          <div className="program-image">
            <img
              src="/african-youth-leadership-training-workshop.jpg"
              alt="Programme Leadership"
            />
          </div>
        </div>
      </section>

      {/* Section Communautaire */}
      <section className="program-section alt">
        <div className="program-content">
          <div className="program-image">
            <img
              src="/african-community-development-project-volunteers.jpg"
              alt="Programme Communautaire"
            />
          </div>
          <div className="program-text">
            <h2 className="program-title">Programme Communautaire</h2>
            <p className="program-description">
              Mobiliser les jeunes pour des projets qui répondent aux besoins de
              leurs communautés et créent un impact durable.
            </p>
            <ul className="program-list">
              <li>Projets communautaires</li>
              <li>Volontariat jeunesse</li>
              <li>Partenariats locaux</li>
            </ul>
            <div className="program-stats">
              <div>
                <h3>120+</h3>
                <p>Projets réalisés</p>
              </div>
              <div>
                <h3>30</h3>
                <p>Communautés touchées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Soutenez nos programmes</h2>
        <p>
          Votre contribution permet de toucher encore plus de jeunes et de créer
          un impact durable.
        </p>
        <div className="cta-buttons">
          <a href="/s-impliquer" className="btn-primary">
            Faire un don
          </a>
          <a href="/s-impliquer" className="btn-outline">
            Devenir bénévole
          </a>
        </div>
      </section>
    </div>
  );
}
