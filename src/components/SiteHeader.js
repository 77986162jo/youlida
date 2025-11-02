import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import styles from "./SiteHeader.module.css";
import { useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>YOULIDA</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Accueil
          </Link>
          <Link to="/a-propos" className={styles.navLink}>
            À propos
          </Link>
          <Link to="/nos-actions" className={styles.navLink}>
            Nos actions
          </Link>
          <Link to="/s-impliquer" className={styles.navLink}>
            S'impliquer
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Button asChild className={styles.donateButton}>
            <Link to="/s-impliquer">Faire un don</Link>
          </Button>
          
          {/* Menu mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </Button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className={`${styles.nav} ${styles.mobileNav}`}>
            <Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
            <Link to="/a-propos" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              À propos
            </Link>
            <Link to="/nos-actions" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Nos actions
            </Link>
            <Link to="/s-impliquer" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              S'impliquer
            </Link>
            <Link to="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}