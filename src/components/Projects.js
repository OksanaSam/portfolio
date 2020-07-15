import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import moodyMobile from '../Moody_MobileMockup.png';
import moodyDesktop from '../Moody_DesktopMockup.png';
import pTDesktop from '../PT_DesktopMockup.png';
import pTMobile from '../PTIphone.png';
import airDesktop from '../AirClearDesktopMockup.png';
import airMobile from '../AirClearMobileMockup.png';

function Projects(){

    const slider = (
        <AwesomeSlider animation="foldOutAnimation">
          <div className='mobileView'><img src={moodyMobile} alt='Mobile View of Moody Project'/></div>
          <div className='desktopView'><img src={moodyDesktop} alt='Desktop View of Moody Project'/></div>
        </AwesomeSlider>
      );
    
      const slider2 = (
        <AwesomeSlider animation="foldOutAnimation">
          <div className='mobileView'><img src={airMobile} alt='Mobile View of Moody Project'/></div>
          <div className='desktopView'><img src={airDesktop} alt='Desktop View of Moody Project'/></div>
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
            <section className='projects' id='projects'>
                <h2>projects</h2>
                <div className='project moody' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider}
                  {/* <img src={moodyMobile} alt='Mobile View of Moody Project'/> */}
                        </div>
                        <div className='projectDescription'>
                                <h3>Moody</h3>
                                <p>A custom moodboard web application tailored to user preferences. Built on React using 2 APIs. The user can switch between color and audio themes with a toggle switch.</p>
                                <p>React | Unsplash API | Type Fit API | react-sound | Accessible</p>
                                <a className='projectLink' href='https://oksanasam.github.io/oksana-samokhvalova-project-five/' target='_blank'>Live</a>
                               <a className='projectLink' href='https://github.com/OksanaSam/oksana-samokhvalova-project-five' target='_blank'>GitHub</a>
                        </div>
                    </div>
                {/* <div className='desktopView'>
                  <img src={moodyDesktop} alt='Desktop View of Moody Project'/>
                </div> */}
                </div>
                <div className='project airClear' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider2}
                            {/* <img src={airMobile} alt='Mobile View of Air Clear Canada Project'/> */}
                        </div>
                        <div className='projectDescription'>
                            <h3>AirClear Canada</h3>
                            <p>A pair project built in partnership with <a href='https://thisdude.codes/#' target='_blank'>Michael Currie</a>: an interactive web app that allows a user to check the air quality in Canadian provinces and view the real time air quality and weather data.</p>
                            <p>jQuery | MapQuest API | AirVisual API | LeafletJS | GeoJSON | Unsplash API</p>
                            <a className='projectLink' href='https://airclear.netlify.app/' target='_blank'>Live</a>
                            <a className='projectLink' href='https://github.com/OksanaAndMikeCode/AirQualityApp' target='_blank'>GitHub</a>
                        </div>
                    </div>
                {/* <div className='desktopView'>
                    <img src={airDesktop} alt='Desktop of Air Clear Canada Project'/>
                </div> */}
                </div>
                <div className='project pT' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {/* <img src={pTMobile} alt='Mobile View of Page Turners Project'/> */}
                            {slider3}
                        </div>
                        <div className='projectDescription'>
                            <h3>Page Turners</h3>
                            <p>A group project built in partnership with <a href='http://davidjdownie.ca/'>David Downie</a>, <a href='https://www.vigyankayastha.com/' target='_blank'>Vigyan Kayastha</a> and <a href='https://www.anastasiamay.com/' target='_blank'>Anastasia May</a>: an app that allows a user to track their reading lists. The user can search books by title and author, add them to their virtual bookshelf, delete books and mark them as read/unread.</p>
                            <p>React | Google Books API | Firebase | Sass | Accessible</p>
                            <a className='projectLink' href='https://dankestteamever.github.io/page-turners/' target='_blank'>Live</a>
                            <a className='projectLink' href='https://github.com/DankestTeamEver/page-turners' target='_blank'>GitHub</a>
                        </div>
                    </div>
                {/* <div className='desktopView'>
                    <img src={pTDesktop} alt='Desktop View of Page Turners Project'/>
                </div> */}
                </div>
            </section>
        </>
    )}

export default Projects;