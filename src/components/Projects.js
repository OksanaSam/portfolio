import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import moodyMobile from '../Moody_MobileMockup.png';
import moodyDesktop from '../Moody_DesktopMockup.png';
import pTDesktop from '../PT_DesktopMockup.png';
import pTMobile from '../PTIphone.png';
import airDesktop from '../AirClearDesktopMockup.png';
import airMobile from '../AirClearMobileMockup.png';
import Translate from 'translate-components';

function Projects(){

    const slider = (
        <AwesomeSlider animation="foldOutAnimation">
            <div className='mobileView'><img src={moodyMobile} alt='Mobile View of Moody Project'/></div>
            <div className='desktopView'><img src={moodyDesktop} alt='Desktop View of Moody Project'/></div>
        </AwesomeSlider>
      );
    
      const slider2 = (
        <AwesomeSlider animation="foldOutAnimation">
            <div className='desktopView'><img src={airDesktop} alt='Desktop View of Moody Project'/></div>
            <div className='mobileView'><img src={airMobile} alt='Mobile View of Moody Project'/></div>
        </AwesomeSlider>
      );
    
      const slider3 = (
        <AwesomeSlider animation="foldOutAnimation">
            <div className='mobileView'><img src={pTMobile} alt='Mobile View of Moody Project'/></div>
            <div className='desktopView'><img src={pTDesktop} alt='Desktop View of Moody Project'/></div>
        </AwesomeSlider>
      );

    return (
        <>
        {/* PROJECTS */}
            <section className='projects' id='projects'>
                <h2><Translate useRawText={true}>projects</Translate></h2>
                <div className='project moody' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider}
                        </div>
                        <div className='projectDescription'>
                                <h3>Moody</h3>
                                <p><Translate useRawText={true}>A custom moodboard web application tailored to user preferences. Built on React using 2 APIs. The user can switch between color and audio themes with a toggle switch.</Translate></p>
                                <p className='toolKit'>React | Unsplash API | Type Fit API | react-sound | Accessible</p>
                                <a className='projectLink' href='https://oksanasam.github.io/oksana-samokhvalova-project-five/' target='_blank' rel='noopener noreferrer'>Live</a>
                               <a className='projectLink' href='https://github.com/OksanaSam/oksana-samokhvalova-project-five' target='_blank' rel='noopener noreferrer' >GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='project airClear' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider2}
                        </div>
                        <div className='projectDescription'>
                            <h3>AirClear Canada</h3>
                            <p><Translate useRawText={true}>A pair project built in partnership with </Translate><a href='https://thisdude.codes/#' target='_blank' rel='noopener noreferrer' >Michael Currie</a>: <Translate useRawText={true}>an interactive web app that allows a user to check the air quality in Canadian provinces and view the real time air quality and weather data.</Translate></p>
                            <p className='toolKit'>jQuery | MapQuest API | AirVisual API | LeafletJS | GeoJSON | Unsplash API</p>
                            <a className='projectLink' href='https://airclear.netlify.app/' target='_blank' rel='noopener noreferrer' >Live</a>
                            <a className='projectLink' href='https://github.com/OksanaAndMikeCode/AirQualityApp' target='_blank' rel='noopener noreferrer'>GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='project pT' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider3}
                        </div>
                        <div className='projectDescription'>
                            <h3>Page Turners</h3>
                            <p><Translate useRawText={true}>A group project built in partnership with </Translate><a href='http://davidjdownie.ca/' target='_blank' rel='noopener noreferrer'>David Downie</a>, <a href='https://www.vigyankayastha.com/' target='_blank' rel='noopener noreferrer' >Vigyan Kayastha</a> <Translate useRawText={true}>and</Translate> <a href='https://www.anastasiamay.com/' target='_blank' rel='noopener noreferrer' >Anastasia May</a>: <Translate useRawText={true}>an app that allows a user to track their reading lists. The user can search books by title and author, add them to their virtual bookshelf, delete books and mark them as read/unread.</Translate></p>
                            <p className='toolKit'>React | Google Books API | Firebase | Sass | Accessible</p>
                            <a className='projectLink' href='https://dankestteamever.github.io/page-turners/' target='_blank' rel='noopener noreferrer'>Live</a>
                            <a className='projectLink' href='https://github.com/DankestTeamEver/page-turners' target='_blank' rel='noopener noreferrer' >GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )}

export default Projects;