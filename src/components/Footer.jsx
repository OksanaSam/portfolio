import React from 'react';
// * * * * Smooth Scroll Library
import { animateScroll as scroll } from 'react-scroll';
// * * * * Font Awesome Icons
import Icon from './Icon.jsx';
import { faTwitter, faLinkedin, faReact, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
// * * * * TRANSLATIONS FEATURE
import Translate from 'translate-components';

function Footer() {
   
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <footer>
            <div className='wrapper'>
                <div className='footerFlex'>
                    <span onClick={scrollToTop}><Icon iconName={faArrowCircleUp} /></span>
                    <ul className='socialIcons'>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account"><Icon iconName={faGithub} /></a></li>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'><Icon iconName={faLinkedin} /></a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account"><Icon iconName={faTwitter} /></a></li>
                        <li><a href='https://calendly.com/oksana-samokhvalova' target='_blank' rel="noopener noreferrer"><Icon iconName={faCalendarAlt} /><span className='sr-only'>schedule a meeting</span></a></li>
                    </ul>
                </div>
                <p className='copyright'>© 2020 oksanadev.com <span><Icon iconName={faReact} /></span></p>
                <p className='attribution'> <a href='https://www.instagram.com/alyona_demeneva/' target='_blank' rel='noopener noreferrer'><Icon iconName={faInstagram} /> <Translate useRawText={true}>Sketch by Alyona Demeneva</Translate></a></p>
            </div>
        </footer>
    );
}

export default Footer;