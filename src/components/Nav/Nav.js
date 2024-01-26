import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import styles from './Nav.module.css';
import hamburger from '../../images/ci_hamburger-lg.png';
import lighticon from '../../images/Light mode.png';
import darkicon from '../../images/Dark mode.png';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const Nav = () => {
  // const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeModal = () => {
    setMenuOpen(false);
  };
 return (
  <div className={styles.container}>
    <div className={styles.nav}>
      

      <div className={`${styles.navbar_menu} ${menuOpen ? `${styles.show}` : ''}`}>
      <div className={styles.nav_toggle} onClick={toggleMenu}>
      <div className={styles.hamburger}>
      <img src={hamburger} alt="hamburger" />
      </div>
    </div>
        <NavLink to="/" className={styles.navbar_link}>Resume</NavLink>
        <NavLink to="/contact" className={styles.navbar_link}>Contact Me</NavLink>
        <div>
        <img
          src={darkMode ? darkicon : lighticon}
          alt="mode-icon"
          onClick={toggleDarkMode}
          className={styles.modeIcon}
          />
        </div>
      </div>
    </div>
    
    {menuOpen && (
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
          <span className={styles.close} onClick={closeModal}>back</span>
          <div>
          <NavLink to="/" className={styles.navbar_link}>Resume</NavLink>
          <NavLink to="/contact" className={styles.navbar_link}>Contact Me</NavLink>
          <img
          src={darkMode ? darkicon : lighticon}
          alt="mode-icon"
          onClick={toggleDarkMode}
          className={styles.modeIcon}
          />
        </div>
        </div>
      </div>
    )}
    </div>
 );
};

export default Nav;
