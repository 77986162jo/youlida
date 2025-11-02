import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import styles from "./SiteFooter.module.css"

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LOGO + DESCRIPTION + RESEAUX */}
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <span className={styles.logoText}>YOULIDA</span>
            </div>
            <p className={styles.description}>
              Engager les jeunes africains à être des acteurs de changement pour eux-mêmes et leurs communautés.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Facebook className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Instagram className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className={styles.column}>
            <h3 className={styles.title}>Navigation</h3>
            <ul className={styles.list}>
              <li>
                <Link to="/" className={styles.link}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className={styles.link}>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/nos-actions" className={styles.link}>
                  Nos actions
                </Link>
              </li>
              <li>
                <Link to="/s-impliquer" className={styles.link}>
                  S'impliquer
                </Link>
              </li>
            </ul>
          </div>

          {/* NOS ACTIONS */}
          <div className={styles.column}>
            <h3 className={styles.title}>Nos actions</h3>
            <ul className={styles.list}>
              <li>
                <Link to="/nos-actions#education" className={styles.link}>
                  Éducation
                </Link>
              </li>
              <li>
                <Link to="/nos-actions#sante" className={styles.link}>
                  Santé
                </Link>
              </li>
              <li>
                <Link to="/nos-actions#leadership" className={styles.link}>
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/nos-actions#communaute" className={styles.link}>
                  Développement communautaire
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.column}>
            <h3 className={styles.title}>Contact</h3>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <a href="mailto:contact@youlida.org" className={styles.link}>
                  contact@youlida.org
                </a>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} YOULIDA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}














