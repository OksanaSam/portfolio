import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../Logo_Oksana_white.svg';

function Footer() {
    let github = <FontAwesomeIcon icon={faGithub} size='1x' />;
    let instagramIcon = <FontAwesomeIcon icon={faInstagram} size='1x' />;
    // let spotifyIcon = <FontAwesomeIcon icon={faSpotify} size='1x' />;
    let linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='1x' />;
    let twitterIcon = <FontAwesomeIcon icon={faTwitter} size='1x' />;
    let calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} size='1x' />;
    
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

  

    return (
        <footer>
            <div className='wrapper'>
                <div className='footerFlex'>
                    <img className='mainLogo' src={logo} alt='logo' onClick={scrollToTop}/>
                    <ul className='socialIcons'>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account">{github}</a></li>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'>{linkedinIcon}</a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account">{twitterIcon}</a></li>
                        {/* <li><a href='https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq' target='_blank' rel='noopener noreferrer' aria-label='Spotify playlist'>{spotifyIcon}</a></li> */}
                        <li><a href='https://calendly.com/oksana-samokhvalova'>{calendarIcon}<span className='sr-only'>schedule a meeting</span></a></li>
                    </ul>
                </div>
                <p className='copyright'>© 2020 Oksana Samokhvalova</p>
                <p className='attribution'> <a href='https://www.instagram.com/alyona_demeneva/'>{instagramIcon} Sketch by Alyona Demeneva</a></p>
            </div>
        </footer>
    );
}

export default Footer;














    