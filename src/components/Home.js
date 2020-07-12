import React, { Fragment } from 'react';
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import sketch from '../sketch.png';
import { animateScroll as scroll } from 'react-scroll';
import moodyMobile from '../Moody_MobileMockup.png';
import moodyDesktop from '../Moody_DesktopMockup.png';
import pTDesktop from '../PT_DesktopMockup.png';
import pTMobile from '../PTIphone.png';
import airDesktop from '../AirClearDesktopMockup.png';
import airMobile from '../AirClearMobileMockup.png';
import About from './About';


function Home({ match }) {
  // let hamburger = (<FontAwesomeIcon icon={faBars} size="1x" />);
  let chevron = (<FontAwesomeIcon icon={faChevronDown} size="1x" />);
 
    return (
      <Fragment>
        <section className='hero'>
          <div className='wrapper'>
            <div className='heroContent'>
              <div className='heroText'>
                <div className='text'>
                  <p className='firstLine'>hi, i'm oksana</p> 
                  <p>(n) a front-end developer</p>
                </div>
                <img className='sketch' src={sketch} alt='sketch'/>
              </div>
              <span className='downButton' onClick={() => scroll.scrollMore(500)}
                >{chevron}</span>
            </div>
          </div>
        </section>
        <section className='simple'>
          <div className='wrapper'>
            <p>SIMPLE IS BETTER THAN COMPLEX</p>
          </div>
        </section>
        <section id='aboutId' className='aboutMe'>
          {match.params.aboutId}
          <div className='myPhoto'>
          </div>
          <div className='aboutMeText'>
              <h3>hello</h3>
              <p>My name is Oksana Samokhvalova. I'm a Front-End Developer based in Toronto with a passion for web technologies, accessible digital content and clean design.
              </p>
              <button><Link to='/about'>More</Link></button>
              <Route exact path="/about" component={About}/>
          </div>
        </section>
        <section className='skills'>
          <div className='wrapper'>
            <h2>my skills</h2>
            <ul className='skillsList'>
              <li>HTML5</li>
              <li>Javascript</li>
              <li>Git collaboration</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Web accessibility </li>
              <li>SASS</li>
              <li>jQuery</li>
              <li>Responsive web design</li>
              <li> Firebase</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </section>
        <section className='projects'>
            <div className='project projectMoody'>
              <div className='wrapper'>
                <div className='projectDisplay'>
                  <div className='mobileView'>
                    <img src={moodyMobile} alt='Mobile View of Moody Project'/>
                  </div>
                  <div className='projectDescription'>
                    <div className='projectCard'>
                      <h3>Moody</h3>
                      <p>An app build on React using 2 APIs. It represents a custom moodboard tailored to user preferences. Based on the user input, the app sends a request to Unsplash API to visualize the mood. The click on the quote card triggers a call to the quotes API to get a random quote. The user can switch between pink and blue theme with a toggle switch. Clicking the toggle also activates the sound switch.</p>
                      <p>React | Type Fit API | Unsplash API | React-Sound</p>
                      <button><a href='https://oksanasam.github.io/oksana-samokhvalova-project-five/'>View Live</a></button>
                      <button><a href='https://github.com/OksanaSam/oksana-samokhvalova-project-five'>GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
                <div className='desktopView'>
                  <img src={moodyDesktop} alt='Desktop View of Moody Project'/>
                </div>
            </div>
            <div className='project projectAir'>
              <div className='wrapper'>
                <div className='projectDisplay'>
                  <div className='mobileView'>
                      <img src={airMobile} alt='Mobile View of Air Clear Canada Project'/>
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
              </div>
              <div className='desktopView'>
                <img src={airDesktop} alt='Desktop of Air Clear Canada Project'/>
              </div>
            </div>
            <div className='project projectBooks'>
              <div className='wrapper'>
                <div className='projectDisplay'>
                  <div className='mobileView'>
                    <img src={pTMobile} alt='Mobile View of Page Turners Project'/>
                  </div>
                  <div className='projectDescription'>
                      <div className='projectCard'>
                        <h3>Page Turners</h3>
                        <a href=''></a>
                        <p>A group project built in partnership with  <a href='https://github.com/orgs/DankestTeamEver/people/daibhidhdwaum'>David Downie</a>, <a href='https://github.com/vigyan-k'>Vigyan Kayastha</a> and <a href='https://github.com/amay-zingg'>Anastasia May</a>: an app that allows a user to track their reading lists. The user can search books by title and author, add them to their virtual bookshelf via Firebase database., delete books from the bookshelf and mark as read/unread. The app is also calculating the percentage of books read.</p>
                        <p>React | Google Books API | Firebase</p>
                        <button><a href='https://dankestteamever.github.io/page-turners/'>View Live</a></button>
                        <button><a href='https://github.com/DankestTeamEver/page-turners'>GitHub</a></button>
                      </div>
                  </div>
                </div>
              </div>
              <div className='desktopView'>
                <img src={pTDesktop} alt='Desktop View of Page Turners Project'/>
              </div>
            </div>
        </section>


    </Fragment>
    )
  }



export default Home;