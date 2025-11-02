// import { SiteHeader } from "./SiteHeader";
// import { SiteFooter } from "./SiteFooter";
import { Target, Eye, Users, Heart, Globe, Lightbulb } from "lucide-react";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* <SiteHeader /> */}

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>À propos de YOULIDA</h1>
              <p className={styles.heroSubtitle}>
                Young Leader's Initiatives for Development of sub-Saharan Africa
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className={styles.visionMission}>
          <div className={styles.container}>
            <div className={styles.visionMissionGrid}>
              <div className={`${styles.card} ${styles.visionCard}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <Eye className={styles.icon} />
                  </div>
                  <h2 className={styles.cardTitle}>Notre Vision</h2>
                  <p className={styles.cardText}>
                    Engager les jeunes africains à être des acteurs de changement pour eux-mêmes et leurs communautés.
                  </p>
                  <p className={styles.cardText}>
                    Nous croyons en un avenir où chaque jeune africain a les connaissances, les compétences et la
                    confiance nécessaires pour réaliser son plein potentiel et contribuer positivement au développement
                    de l'Afrique subsaharienne.
                  </p>
                </div>
              </div>

              <div className={`${styles.card} ${styles.missionCard}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <Target className={styles.icon} />
                  </div>
                  <h2 className={styles.cardTitle}>Notre Mission</h2>
                  <p className={styles.cardText}>
                    Permettre aux adolescents et jeunes africains de prendre des décisions éclairées sur leur vie
                    éducative, sexuelle, leur bien-être et leur santé.
                  </p>
                  <p className={styles.cardText}>
                    À travers des programmes innovants et une approche communautaire, nous offrons aux jeunes les outils
                    et le soutien dont ils ont besoin pour faire des choix informés qui transformeront leur vie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nos Valeurs</h2>
              <p className={styles.sectionDescription}>
                Les principes qui guident notre action au quotidien
              </p>
            </div>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Heart className={styles.valueSvg} />
                </div>
                <h3 className={styles.valueTitle}>Empathie</h3>
                <p className={styles.valueDescription}>
                  Nous écoutons et comprenons les besoins uniques de chaque jeune et communauté.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Users className={styles.valueSvg} />
                </div>
                <h3 className={styles.valueTitle}>Inclusion</h3>
                <p className={styles.valueDescription}>
                  Nous créons des espaces sûrs où tous les jeunes sont les bienvenus, sans discrimination.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Lightbulb className={styles.valueSvg} />
                </div>
                <h3 className={styles.valueTitle}>Innovation</h3>
                <p className={styles.valueDescription}>
                  Nous développons des solutions créatives adaptées aux réalités africaines.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Target className={styles.valueSvg} />
                </div>
                <h3 className={styles.valueTitle}>Excellence</h3>
                <p className={styles.valueDescription}>
                  Nous visons la qualité dans tous nos programmes et interventions.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Globe className={styles.valueSvg} />
                </div>
                <h3 className={styles.valueTitle}>Collaboration</h3>
                <p className={styles.valueDescription}>
                  Nous travaillons en partenariat avec les communautés, familles et organisations.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Heart className={styles.valueSvg} />
                </div>
                <h3 className={styles.valueTitle}>Intégrité</h3>
                <p className={styles.valueDescription}>
                  Nous agissons avec transparence et responsabilité envers nos bénéficiaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Notre Équipe</h2>
              <p className={styles.sectionDescription}>
                Des professionnels passionnés dédiés à l'autonomisation de la jeunesse africaine
              </p>
            </div>

            <div className={styles.teamGrid}>
              <div className={styles.teamCard}>
                <div className={styles.teamAvatar} />
                <h3 className={styles.teamName}>Dr. Aminata Diallo</h3>
                <p className={styles.teamRole}>Directrice Exécutive</p>
                <p className={styles.teamBio}>
                  Experte en santé publique avec 15 ans d'expérience en Afrique de l'Ouest.
                </p>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.teamAvatar} />
                <h3 className={styles.teamName}>Kwame Mensah</h3>
                <p className={styles.teamRole}>Directeur des Programmes</p>
                <p className={styles.teamBio}>
                  Spécialiste en développement communautaire et éducation des jeunes.
                </p>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.teamAvatar} />
                <h3 className={styles.teamName}>Fatou Ndiaye</h3>
                <p className={styles.teamRole}>Coordinatrice Éducation</p>
                <p className={styles.teamBio}>
                  Enseignante passionnée avec une expertise en pédagogie innovante.
                </p>
              </div>

              <div className={styles.teamCard}>
                <div className={styles.teamAvatar} />
                <h3 className={styles.teamName}>Ibrahim Koné</h3>
                <p className={styles.teamRole}>Responsable Partenariats</p>
                <p className={styles.teamBio}>
                  Expert en mobilisation de ressources et relations institutionnelles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partners}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nos Partenaires</h2>
              <p className={styles.sectionDescription}>Ensemble, nous créons un impact durable</p>
            </div>

            <div className={styles.partnersGrid}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={styles.partnerCard}>
                  <div className={styles.partnerLogo} />
                </div>
              ))}
            </div>

            <div className={styles.partnerCta}>
              <p className={styles.partnerText}>Vous souhaitez devenir partenaire?</p>
              <a href="/contact" className={styles.partnerLink}>
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* <SiteFooter /> */}
    </div>
  );
}