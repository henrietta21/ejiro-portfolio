import React, {useState} from 'react';
import styles from './Home.module.css'; // Don't forget to import the CSS file
import image from '../../images/image11.png';
import linkedin from '../../images/mdi_linkedin.png'
import Nav from '../Nav/Nav';
import Button from '../Button/Button';

const Home = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const closeModal = () => {
  //   setMenuOpen(false);
  // };

return(
 <div className={styles.container}>
    <div className={styles.image_section}>
      <img src={image} alt="portfolio image" />
    </div>

    <div className={styles.text_section}>
      <Nav />

      <div className={styles.profile}>
        <h1>Ejiro Jude E.</h1>
        <div>
          <h2>Product Designer at Semicolon</h2>

          <div className={styles.profile_details}>
            <p>I am a product designer that cares about words (copy), a strong user advocate with eyes on business goals yet promoting an inclusive experience for the users. I have helped companies increase users <span>acquisition, adoption, & retention by simple onboarding.</span> With my experience with different engineers, designers, product managers and other stakeholders, it has trained me on how to approach complex problems with solutions that drives <span>business goals while empowering users.</span> </p>

            <p>I am currently based in Lagos, Nigeria and I lead the design team at Semicolon Africa focusing on <span>UX and strategy direction</span> for Semicolon’s internal and external projects </p>

            <p>I have experiences in UX/UI Design, User Research, Design Systems, Usability Testing, Mentoring, Facilitation, and Culture Cultivation. </p>
          </div>
        </div>
      </div>

      <div className={styles.work_display}>
        <Button text="View my work" className={styles.btn}/>
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
 </div>
);
};

export default Home;