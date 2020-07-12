import React, { Fragment, useState, useEffect } from 'react';
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
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
import randomizer from './randomizer';
import Icon from './Icon';



function Home({ match }) {
  // let hamburger = (<FontAwesomeIcon icon={faBars} size="1x" />);
  let chevron = (<FontAwesomeIcon icon={faChevronDown} size="1x" />);
  // const slider = (
  //   <AwesomeSlider>
  //     <div data-src='/path/to/Moody_DesktopMockup.png' />
  //     <div data-src='/sketch.png' />
  //   </AwesomeSlider>
  // );

  const funFacts = ['ThreatenedSwan', 'calc(30 - 3)', 'orbitz', 'Marley', 'Riley', 'pineappleJuice', 'dank', 'survivor', 'cookies', 'gityourselfabreak', 'sonOfJson', 'zoominplz', 'JS = magic', 'undefined', 'keepitdry', 'pizza+sushi',  'projectproject', 'curlyboys', 'gridouttahere', 'gitoffyourlaptop', 'conCATenation', 'cohort27', 'flexYESfloatNO'];
  // let randomKeyword;

  const randomizer = () => {
      const randomKeyword = funFacts[Math.floor(Math.random() * funFacts.length)];
      setrandomFact(randomKeyword);
      // console.log(randomKeyword);
  };

  const [ randomFact, setrandomFact ] = useState();

 
  useEffect(() => {  
    setInterval(randomizer, 2000);
  }, []);






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
      {/* <div>3</div>
      <div>4</div> */}
    </AwesomeSlider>
  );

  // let github = <FontAwesomeIcon icon={faGithub} size='1x' />;
  let instagramIcon = <FontAwesomeIcon icon={faInstagram} size='1x' />;
  // let spotifyIcon = <FontAwesomeIcon icon={faSpotify} size='1x' />;
  let linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='1x' />;
  let twitterIcon = <FontAwesomeIcon icon={faTwitter} size='1x' />;
  let calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} size='1x' />;
  let reactIcon = <FontAwesomeIcon icon={faReact} size='1x' />;

    return (
      <Fragment>
        <section className='hero'>
          <div className='wrapper'>
            <div className='heroContent'>
              <div className='heroText'>
                <div className='text'>
                  <h1 className='firstLine'>hi, i'm oksana</h1> 
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
              <h2>about</h2>
              <p>My name is Oksana Samokhvalova. I'm a Front-End Developer based in Toronto with a passion for web technologies, accessible digital content and clean design.
              </p>
              <span>Currently into: {randomFact}</span>
              <ul className='socialIcons'>
                        <li><a href='https://github.com/OksanaSam' target='_blank' rel='noopener noreferrer' aria-label="GitHub account"><Icon iconName={faGithub} /></a></li>
                        <li><a href='https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn account'>{linkedinIcon}</a></li>
                        <li><a href='https://twitter.com/oksanadev' target='_blank' rel='noopener noreferrer' aria-label="Twitter Account">{twitterIcon}</a></li>
                        {/* <li><a href='https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq' target='_blank' rel='noopener noreferrer' aria-label='Spotify playlist'>{spotifyIcon}</a></li> */}
                        <li><a href='https://calendly.com/oksana-samokhvalova'>{calendarIcon}<span className='sr-only'>schedule a meeting</span></a></li>
                    </ul>
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
              <li>Git Collaboration</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Web Accessibility </li>
              <li>SASS</li>
              <li>jQuery</li>
              <li>Responsive Web Design</li>
              <li>Firebase</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </section>
        <section className='projects'>
        <h2>projects </h2>
            <div className='project projectMoody'>
              <div className='wrapper'>
                <div className='projectDisplay'>
                  <div className='mobileView'>
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
              </div>
                <div className='desktopView'>
                  <img src={moodyDesktop} alt='Desktop View of Moody Project'/>
                </div>
            </div>
            <div className='project projectAir'>
              <div className='wrapper'>
                <div className='projectDisplay'>
                  <div className='mobileView'>
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
              </div>
              <div className='desktopView'>
                <img src={airDesktop} alt='Desktop of Air Clear Canada Project'/>
              </div>
            </div>
            <div className='project projectBooks'>
              <div className='wrapper'>
                <div className='projectDisplay'>
                  <div className='mobileView'>
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
              </div>
              {/* <div className='desktopView'>
                <img src={pTDesktop} alt='Desktop View of Page Turners Project'/>
              </div> */}
            </div>
        </section>
    </Fragment>
    )
  }



export default Home;