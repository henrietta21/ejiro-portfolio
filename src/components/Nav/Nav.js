import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import styles from './Nav.module.css';
import hamburger from '../../images/ci_hamburger-lg.png'

const Nav = () => {
  // const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeModal = () => {
    setMenuOpen(false);
  };
 return (
  <div className={styles.container}>
    <div className={styles.nav}>
      <div className={styles.nav_toggle} onClick={toggleMenu}>
        <div className={styles.hamburger}>
        <img src={hamburger} alt="hamburger" /></div>
      </div>

      <div className={`${styles.navbar_menu} ${menuOpen ? `${styles.show}` : ''}`}>
        <NavLink to="/" className={styles.navbar_link}>Resume</NavLink>
        <NavLink to="/contact" className={styles.navbar_link}>Contact Me</NavLink>
      </div>
    </div>
    
    {menuOpen && (
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <div>
          <NavLink to="/" className={styles.navbar_link}>Resume</NavLink>
          <NavLink to="/contact" className={styles.navbar_link}>Contact Me</NavLink>
        </div>
        </div>
      </div>
    )}
    </div>
 );
};

export default Nav;
