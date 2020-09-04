import React from 'react';
import RandomWord from './RandomWord';
import mySecondPhoto from '../IMG_20200718_184321.jpg';
// * * * * Font Awesome Icons
import Icon from './Icon.jsx';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// * * * * TRANSLATIONS FEATURE
import Translate from 'translate-components';

function About(){
    return (
        <>
           <section id='about' className='aboutMe'>
                <div className='myPhoto'>
                    <img src={mySecondPhoto} alt='my photo'/>
                </div>
                <div className='aboutMeText'>
                    <h2><Translate useRawText={true}>about</Translate></h2>
                    <p><Translate useRawText={true}>My name is Oksana Samokhvalova. I'm a Front-End Developer based in Toronto with a passion for web technologies, accessible digital content and clean design.</Translate></p>
                    <p><Translate useRawText={true}>As a recent graduate of Juno College of Technology (Web Development Immersive Bootcamp), I like building user-friendly web applications with simple UI and keeping up with the latest trends in Web Development.</Translate></p>
                    <p><Translate useRawText={true}>My background is in Linguistics and Graphic Design. So, I can talk for hours about syntax and semantics, of both programming and natural languages.</Translate></p>
                    <p><Translate useRawText={true}>Kinda hooked on React.</Translate></p>
                    <RandomWord />
                    <p><Translate useRawText={true}>Please feel free to reach out via social channels below.</Translate></p>
                    <ul className='socialIcons'>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'><Icon iconName={faLinkedin} /></a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account"><Icon iconName={faTwitter} /></a></li>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account"><Icon iconName={faGithub} /></a></li>
                        <li><a href='mailto:oksana.o.samokhvalova@gmail.com' target='_blank' rel='noopener noreferrer'><Icon iconName={faEnvelope} /><span class='sr-only'>send me an email</span></a></li>
                    </ul>
                </div>
            </section>
        </>
    )}

export default About;