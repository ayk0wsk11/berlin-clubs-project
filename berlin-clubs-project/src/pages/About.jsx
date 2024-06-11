import React from 'react'
import styles from './About.module.css';




export const About = () => {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>About US</h1>
          <h2 className={styles.description}>
          Welcome to our website! We are a dynamic duo of aspiring developers who are passionate about creating funny, innovative and user-friendly web solutions.
          </h2>
          <h2 className={styles.subtitle}>Join us on Linkedin!</h2>
          <ul className={styles.featuresList}>
         <li> <a href="https://www.linkedin.com/in/ayoub-fariji-03241b159/" > Ayoub Fariji</a> </li>
         <li><a href="https://www.linkedin.com/in/ayoub-fariji-03241b159/" > Ayko</a> </li>
         <li> <a href="https://www.linkedin.com/in/ayoub-fariji-03241b159/" > Jonathan Senf</a> </li>
          </ul>
          </div>
      );
    };
    
    export default About;
    
    