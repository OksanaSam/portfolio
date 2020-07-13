import React, { Component, Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import moodyMobile from '../Moody_MobileMockup.png';
import moodyDesktop from '../Moody_DesktopMockup.png';
import pTDesktop from '../PT_DesktopMockup.png';
import pTMobile from '../PTIphone.png';
import airDesktop from '../AirClearDesktopMockup.png';
import airMobile from '../AirClearMobileMockup.png';

function Projects(){
      // const slider = (
  //   <AwesomeSlider>
  //     <div data-src='/path/to/Moody_DesktopMockup.png' />
  //     <div data-src='/sketch.png' />
  //   </AwesomeSlider>
  // );

    const slider = (
        <AwesomeSlider animation="foldOutAnimation">
          <div className='mobileView'><img src={moodyMobile} alt='Mobile View of Moody Project'/></div>
          <div className='desktopView'><img src={moodyDesktop} alt='Desktop View of Moody Project'/></div>
          {/* <div>3</div>
          <div>4</div> */}
        </AwesomeSlider>
      );
    
      const slider2 = (
        <AwesomeSlider animation="foldOutAnimation">
          <div className='mobileView'><img src={airMobile} alt='Mobile View of Moody Project'/></div>
          <div className='desktopView'><img src={airDesktop} alt='Desktop View of Moody Project'/></div>
          {/* <div>3</div>
          <div>4</div> */}
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
            <section className='projects'>
                <h2>projects </h2>
                <div className='project wrapper'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider}
                  {/* <img src={moodyMobile} alt='Mobile View of Moody Project'/> */}
                        </div>
                        <div className='projectDescription'>
                            <div className='projectCard'>
                                <h3>Moody</h3>
                                <p>React | Type Fit API | Unsplash API | react-sound</p>
                                <p>An app built on React using 2 APIs. It represents a custom moodboard tailored to user preferences. Based on the user input, the app sends a request to Unsplash API to visualize the mood. The click on the quote card triggers a call to the quotes API to get a random quote. The user can switch between pink and blue theme with a toggle switch. Clicking the toggle also activates the sound switch.</p>
                                <button><a href='https://oksanasam.github.io/oksana-samokhvalova-project-five/'>View Live</a></button>
                                <button><a href='https://github.com/OksanaSam/oksana-samokhvalova-project-five'>GitHub</a></button>
                            </div>
                        </div>
                    </div>
                {/* <div className='desktopView'>
                  <img src={moodyDesktop} alt='Desktop View of Moody Project'/>
                </div> */}
                </div>
                <div className='project wrapper'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {slider2}
                            {/* <img src={airMobile} alt='Mobile View of Air Clear Canada Project'/> */}
                        </div>
                        <div className='projectDescription'>
                        <div className='projectCard'>
                            <h3>AirClear Canada</h3>
                            <p>A pair project built in partnership with <a href='https://thisdude.codes/#'>Mike Currie</a>: an interactive app that allows a user to check the air quality in Canadian provinces. After clicking anywhere within the provincial boundary, the user can see city markers populating the map. By clicking on a particular marker, the user can view the real time data showing the air quality index, weather and photos of the respective province as a bonus!</p>
                            <p>jQuery | MapQuest API | AirVisual API | Leaflet maps | GeoJSON | Unsplash API</p>
                            <button><a href='https://airclear.netlify.app/'>View Live</a></button>
                            <button><a href='https://github.com/OksanaAndMikeCode/AirQualityApp'>GitHub</a></button> 
                        </div>
                        </div>
                    </div>
                {/* <div className='desktopView'>
                    <img src={airDesktop} alt='Desktop of Air Clear Canada Project'/>
                </div> */}
                </div>
                <div className='project wrapper'>
                    <div className='projectDisplay'>
                        <div className='slider'>
                            {/* <img src={pTMobile} alt='Mobile View of Page Turners Project'/> */}
                            {slider3}
                        </div>
                        <div className='projectDescription'>
                            <div className='projectCard'>
                            <h3>Page Turners</h3>
                            <p>A group project built in partnership with  <a href='https://github.com/orgs/DankestTeamEver/people/daibhidhdwaum'>David Downie</a>, <a href='https://github.com/vigyan-k'>Vigyan Kayastha</a> and <a href='https://github.com/amay-zingg'>Anastasia May</a>: an app that allows a user to track their reading lists. The user can search books by title and author, add them to their virtual bookshelf via Firebase database, delete books from the bookshelf and mark as read/unread. The app is also calculating the percentage of books read.</p>
                            <p>React | Google Books API | Firebase</p>
                            <button><a href='https://dankestteamever.github.io/page-turners/'>View Live</a></button>
                            <button><a href='https://github.com/DankestTeamEver/page-turners'>GitHub</a></button>
                            </div>
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