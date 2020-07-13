import React, { Fragment } from 'react';
import "../App.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import sketch from '../sketch.png';
import { animateScroll as scroll } from 'react-scroll';
import moodyMobile from '../Moody_MobileMockup.png';
import moodyDesktop from '../Moody_DesktopMockup.png';
import pTDesktop from '../PT_DesktopMockup.png';
import pTMobile from '../PTIphone.png';
import airDesktop from '../AirClearDesktopMockup.png';
import airMobile from '../AirClearMobileMockup.png';
import About from './About';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
// import RandomWord from './RandomWord';

import Hero from './Hero';
import Simple from './Simple';
import AboutSection from './AboutSection';
import Skills from './Skills';
import Projects from './Projects';



function Home() {

    return (
      <Fragment>
        <Hero />
        <Simple />
        <AboutSection />
        <Skills />
        <Projects />
    </Fragment>
    )
  }



export default Home;