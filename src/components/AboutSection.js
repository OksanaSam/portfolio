import React from 'react';
import RandomWord from './RandomWord';
import Icon from './Icon.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


function AboutSection(){
    return (
        <>
           <section id='about' className='aboutMe'>
                <div className='myPhoto'></div>
                <div className='aboutMeText'>
                    <h2>about</h2>
                    <p>My name is Oksana Samokhvalova. I'm a Front-End Developer based in Toronto with a passion for web technologies, accessible digital content and clean design.
                    <p>I am a Web Developer with a background in Linguistics and Graphic Design. Passionate about
                            creating accessible and user-friendly websites with clean design and keeping up with the latest trends in Front-End Development.</p>
                        <p>Recent Juno College of Technology (formerly HackerYou) graduate.</p>
                        <p>Currently into React.</p>
                    </p>
                    <RandomWord />
                    <ul className='socialIcons'>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account"><Icon iconName={faGithub} /></a></li>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'><Icon iconName={faLinkedin} /></a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account"><Icon iconName={faTwitter} /></a></li>
                        {/* <li><a href='https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq' target='_blank' rel='noopener noreferrer' aria-label='Spotify playlist'>{spotifyIcon}</a></li> */}
                        <li><a href='https://calendly.com/oksana-samokhvalova'><Icon iconName={faCalendarAlt} /><span className='sr-only'>schedule a meeting</span></a></li>
                    </ul>
                </div>
            </section>
        </>
    )}

export default AboutSection;