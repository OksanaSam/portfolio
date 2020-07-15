import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Icon from './Icon.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';


function Footer() {
   
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <footer>
            <div className='wrapper'>
                <div className='footerFlex'>
                    {/* <img className='mainLogo' src={logo} alt='logo' onClick={scrollToTop}/> */}
                    <span onClick={scrollToTop}><Icon iconName={faArrowCircleUp} /></span>
                    <ul className='socialIcons'>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account"><Icon iconName={faGithub} /></a></li>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'><Icon iconName={faLinkedin} /></a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account"><Icon iconName={faTwitter} /></a></li>
                        {/* <li><a href='https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq' target='_blank' rel='noopener noreferrer' aria-label='Spotify playlist'>{spotifyIcon}</a></li> */}
                        <li><a href='https://calendly.com/oksana-samokhvalova' target='_blank'><Icon iconName={faCalendarAlt} /><span className='sr-only'>schedule a meeting</span></a></li>
                    </ul>
                </div>
                <p className='copyright'>© 2020 oksanadev.com <span><Icon iconName={faReact} /></span></p>
                {/* <p className='attribution'> <a href='https://www.instagram.com/alyona_demeneva/'><Icon iconName={faInstagram} /> Sketch by Alyona Demeneva</a></p> */}
            </div>
        </footer>
    );
}

export default Footer;