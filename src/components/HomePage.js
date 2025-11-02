import { Link } from "react-router-dom";
import { Button } from "./ui/button"; // Chemin corrigé
import { Card, CardContent } from "./ui/Card"; // Chemin corrigé
// import { SiteHeader } from "./SiteHeader"; // Chemin corrigé
// import { SiteFooter } from "./SiteFooter"; // Chemin corrigé
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Target, Globe } from "lucide-react";
import styles from "./HomePage.module.css";


export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* <SiteHeader /> */}

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>
                  <span>Ensemble pour la jeunesse africaine</span>
                </div>
                <h1 className={styles.heroTitle}>
                  Autonomiser les jeunes leaders de demain
                </h1>
                <p className={styles.heroDescription}>
                  YOULIDA aide les adolescents et jeunes africains à prendre des décisions éclairées sur leur vie
                  éducative, sexuelle, leur bien-être et leur santé.
                </p>
                <div className={styles.heroButtons}>
                  <Button size="lg" asChild className={styles.primaryButton}>
                    <Link to="/s-impliquer">
                      Rejoignez-nous
                      <ArrowRight className={styles.buttonIcon} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className={styles.secondaryButton}>
                    <Link to="/nos-actions">Découvrir nos actions</Link>
                  </Button>
                </div>
              </div>

              <div className={styles.heroImage}>
                <img
                  src="/happy-african-youth-students-learning-together-in-.jpg"
                  alt="Jeunes africains engagés"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Notre mission</h2>
              <p className={styles.sectionDescription}>
                Promouvoir la mission et les actions de YOULIDA pour créer un impact durable dans les communautés
                africaines.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              <Card className={styles.missionCard}>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <BookOpen className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>Éducation</h3>
                  <p className={styles.cardDescription}>
                    Permettre aux jeunes de prendre des décisions éclairées sur leur parcours éducatif et leur avenir.
                  </p>
                </CardContent>
              </Card>

              <Card className={styles.missionCard}>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <Heart className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>Santé et bien-être</h3>
                  <p className={styles.cardDescription}>
                    Sensibiliser sur la santé sexuelle, le bien-être mental et physique des adolescents.
                  </p>
                </CardContent>
              </Card>

              <Card className={styles.missionCard}>
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <Sparkles className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>Leadership</h3>
                  <p className={styles.cardDescription}>
                    Engager les jeunes à devenir des acteurs de changement dans leurs communautés.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statLabel}>Jeunes accompagnés</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Programmes réalisés</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>Pays d'intervention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className={styles.impact}>
          <div className={styles.container}>
            <div className={styles.impactGrid}>
              <div className={styles.impactImage}>
                <img
                  src="/african-youth-community-development-project-volunt.jpg"
                  alt="Impact communautaire"
                />
              </div>

              <div className={styles.impactContent}>
                <h2 className={styles.impactTitle}>
                  Un impact qui transforme des vies
                </h2>
                <p className={styles.impactDescription}>
                  Nos programmes touchent directement la vie de milliers de jeunes africains chaque année, leur donnant
                  les outils et la confiance nécessaires pour réaliser leur potentiel.
                </p>

                <div className={styles.features}>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                      <Target className={styles.featureSvg} />
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>Programmes ciblés</h4>
                      <p className={styles.featureDescription}>
                        Des interventions adaptées aux besoins spécifiques de chaque communauté
                      </p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                      <Users className={styles.featureSvg} />
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>Approche communautaire</h4>
                      <p className={styles.featureDescription}>
                        Nous travaillons avec les familles, éducateurs et leaders locaux
                      </p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                      <Globe className={styles.featureSvg} />
                    </div>
                    <div>
                      <h4 className={styles.featureTitle}>Réseau panafricain</h4>
                      <p className={styles.featureDescription}>
                        Une présence dans 15 pays d'Afrique subsaharienne
                      </p>
                    </div>
                  </div>
                </div>

                <Button size="lg" asChild className={styles.impactButton}>
                  <Link to="/nos-actions">
                    Voir nos programmes
                    <ArrowRight className={styles.buttonIcon} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.testimonialsWrapper}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Témoignages</h2>
                <p className={styles.sectionDescription}>Les voix de ceux qui font la différence</p>
              </div>

              <div className={styles.testimonialsGrid}>
                <Card className={styles.testimonialCard}>
                  <CardContent className={styles.testimonialContent}>
                    <div className={styles.testimonialHeader}>
                      <div className={styles.avatar} />
                      <div>
                        <div className={styles.testimonialName}>Amina K.</div>
                        <div className={styles.testimonialRole}>Bénéficiaire, Sénégal</div>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>
                      "Grâce à YOULIDA, j'ai appris à croire en mes capacités. Aujourd'hui, je suis étudiante en
                      médecine et je veux aider ma communauté."
                    </p>
                  </CardContent>
                </Card>

                <Card className={styles.testimonialCard}>
                  <CardContent className={styles.testimonialContent}>
                    <div className={styles.testimonialHeader}>
                      <div className={styles.avatar} />
                      <div>
                        <div className={styles.testimonialName}>Kwame M.</div>
                        <div className={styles.testimonialRole}>Volontaire, Ghana</div>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>
                      "Être volontaire chez YOULIDA m'a permis de redonner à ma communauté et d'inspirer la prochaine
                      génération de leaders."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Rejoignez le mouvement</h2>
              <p className={styles.ctaDescription}>
                Que vous souhaitiez devenir bénévole, faire un don ou simplement en savoir plus, votre soutien fait la
                différence.
              </p>
              <div className={styles.ctaButtons}>
                <Button size="lg" variant="secondary" asChild className={styles.ctaButton}>
                  <Link to="/s-impliquer">Devenir bénévole</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className={styles.ctaButtonOutline}>
                  <Link to="/s-impliquer#dons">Faire un don</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <SiteFooter /> */}
    </div>
  );
}