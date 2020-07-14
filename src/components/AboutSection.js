import React from 'react';
import RandomWord from './RandomWord';
import Icon from './Icon.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function AboutSection(){
    return (
        <>
           <section id='about' className='aboutMe'>
                <div className='myPhoto'></div>
                <div className='aboutMeText'>
                    <h2>about</h2>
                    <p>My name is Oksana Samokhvalova. I'm a Front-End Developer based in Toronto with a passion for web technologies, accessible digital content and clean design.</p>
                    <p>As a recent graduate of Juno College of Technology (Web Development Immersive Bootcamp), I like building user-friendly web applications with simple UX and keeping up with the latest trends in Web Development.</p>
                    <p>My background is in Linguistics and Graphic Design. So, I can talk for hours about syntax and semantics, of both programming and natural languages. Presently hooked on React.</p>
                    <RandomWord />
                    <p>Interested? We can npm start a conversation via social channels below.</p>
                    <ul className='socialIcons'>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'><Icon iconName={faLinkedin} /></a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account"><Icon iconName={faTwitter} /></a></li>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account"><Icon iconName={faGithub} /></a></li>
                        <li><a href="mailto:oksana.o.samokhvalova@gmail.com"><Icon iconName={faEnvelope} /><span class='sr-only'>send me an email</span></a></li>
                    </ul>
                </div>
            </section>
        </>
    )}

export default AboutSection;