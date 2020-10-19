import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import moodyMobile from "../assets/Moody_MobileMockup.png";
import moodyDesktop from "../assets//Moody_DesktopMockup.png";
import pTDesktop from "../assets/PT_DesktopMockup.png";
import pTMobile from "../assets/PT_MobileMockup.png";
import airDesktop from "../assets//AirClearDesktopMockup.png";
import airMobile from "../assets/AirClearMobileMockup.png";
import kanReactDesktop from "../assets/KanReact_Desktop.png";
import kanReactMobile from "../assets/KanReact_Mobile.png";
import catMobile from "../assets/Cat_Mobile.png";
import catDesktop from "../assets/Cat_Desktop.png";
import portfolioMobile from "../assets/Portfolio_Mobile.png";
import portfolioDesktop from "../assets/Portfolio_Desktop.png";
import Translate from "translate-components";

function Projects() {
  const slider = (
    <AwesomeSlider animation="foldOutAnimation">
      <div className="mobileView">
        <img src={moodyMobile} alt="Mobile View of Moody Project" />
      </div>
      <div className="desktopView">
        <img src={moodyDesktop} alt="Desktop View of Moody Project" />
      </div>
    </AwesomeSlider>
  );

  const slider2 = (
    <AwesomeSlider animation="foldOutAnimation">
      <div className="desktopView">
        <img src={kanReactDesktop} alt="Desktop View of KanReact Project" />
      </div>
      <div className="mobileView">
        <img src={kanReactMobile} alt="Mobile View of KanReact Project" />
      </div>
    </AwesomeSlider>
  );

  const slider3 = (
    <AwesomeSlider animation="foldOutAnimation">
      <div className="desktopView">
        <img src={airDesktop} alt="Desktop View of AirClear Canada Project" />
      </div>
      <div className="mobileView">
        <img src={airMobile} alt="Mobile View of AirClear Canada Project" />
      </div>
    </AwesomeSlider>
  );

  const slider4 = (
    <AwesomeSlider animation="foldOutAnimation">
      <div className="mobileView">
        <img src={pTMobile} alt="Mobile View of Page Turners Project" />
      </div>
      <div className="desktopView">
        <img src={pTDesktop} alt="Desktop View of Page Turners Project" />
      </div>
    </AwesomeSlider>
  );

  const slider5 = (
    <AwesomeSlider animation="foldOutAnimation">
      <div className="mobileView">
        <img src={catMobile} alt="Mobile View of Bootcamp Cat Project" />
      </div>
      <div className="desktopView">
        <img src={catDesktop} alt="Desktop View of Bootcamp Cat Project" />
      </div>
    </AwesomeSlider>
  );

  const slider6 = (
    <AwesomeSlider animation="foldOutAnimation">
      <div className="desktopView">
        <img src={portfolioDesktop} alt="Desktop View of Oksana's Portfolio" />
      </div>
      <div className="mobileView">
        <img src={portfolioMobile} alt="Mobile View of Oksana's Portfolio" />
      </div>
    </AwesomeSlider>
  );

  return (
    <>
      <section className="projects" id="projects">
        <h2>
          <Translate useRawText={true}>projects</Translate>
        </h2>
        <div
          className="project moody"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="projectDisplay">
            <div className="slider">{slider}</div>
            <div className="projectDescription">
              <h3>Moody</h3>
              <p>
                <Translate useRawText={true}>
                  A custom moodboard web application tailored to user
                  preferences. Built on React using 2 APIs. The user can switch
                  between color and audio themes with a toggle switch.
                </Translate>
              </p>
              <p className="toolKit">
                React | Redux | Unsplash API | Type Fit API | react-sound |
                Accessible
              </p>
              <a
                className="projectLink"
                href="https://oksanasam.github.io/moody/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="projectLink"
                href="https://github.com/OksanaSam/moody"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div
          className="project kanReact"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="projectDisplay">
            <div className="slider">{slider2}</div>
            <div className="projectDescription">
              <h3>KanReact</h3>
              <p>
                <Translate useRawText={true}>
                  A Kanban board with drag and drop features that uses local
                  storage only (no backend). Built in collaboration with 2 other
                  developers within 3 days for a JavaScript Hackathon.
                </Translate>
              </p>
              <p className="toolKit">
                React | Beautiful Drag and Drop | react-sanfona | Accordion |
                Local Storage | Accessible
              </p>
              <a
                className="projectLink"
                href="https://kanreact.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="projectLink"
                href="https://github.com/yuli-ana/reactive-ladies"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div
          className="project airClear"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="projectDisplay">
            <div className="slider">{slider3}</div>
            <div className="projectDescription">
              <h3>AirClear Canada</h3>
              <p>
                <Translate useRawText={true}>
                  A pair project built in collaboration with
                </Translate>
                <a
                  href="https://thisdude.codes/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Michael Currie
                </a>
                :{" "}
                <Translate useRawText={true}>
                  an interactive web app that allows a user to check the air
                  quality in Canadian provinces and view the real time air
                  quality and weather data.
                </Translate>
              </p>
              <p className="toolKit">
                jQuery | MapQuest API | AirVisual API | LeafletJS | GeoJSON |
                Unsplash API
              </p>
              <a
                className="projectLink"
                href="https://airclear.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="projectLink"
                href="https://github.com/OksanaAndMikeCode/AirQualityApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div
          className="project pT"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="projectDisplay">
            <div className="slider">{slider4}</div>
            <div className="projectDescription">
              <h3>Page Turners</h3>
              <p>
                <Translate useRawText={true}>
                  A group project built in collaboration with
                </Translate>
                <a
                  href="http://davidjdownie.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  David Downie
                </a>
                ,{" "}
                <a
                  href="https://www.vigyankayastha.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vigyan Kayastha{" "}
                </a>
                <Translate useRawText={true}>and</Translate>
                <a
                  href="https://www.anastasiamay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Anastasia May
                </a>
                :{" "}
                <Translate useRawText={true}>
                  an app that allows a user to track their reading lists. The
                  user can search books by title and author, add them to their
                  virtual bookshelf, delete books and mark them as read/unread.
                </Translate>
              </p>
              <p className="toolKit">
                React | Google Books API | Firebase | Sass | Accessible
              </p>
              <a
                className="projectLink"
                href="https://thepageturners.github.io/page-turners/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="projectLink"
                href="https://github.com/ThePageTurners/page-turners"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div
          className="project myPortfolio"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="projectDisplay">
            <div className="slider">{slider6}</div>
            <div className="projectDescription">
              <h3>Portfolio Website</h3>
              <p>
                <Translate useRawText={true}>
                  A multilingual portfolio website (English-French-Ukrainian)
                  built with React Hooks, React-Slider and Translate-Components.
                </Translate>
              </p>
              <p className="toolKit">
                React | Sass | Translate-Components | Responsive | Accessible
              </p>
              <a
                className="projectLink"
                href="https://oksanadev.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="projectLink"
                href="https://github.com/OksanaSam/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div
          className="project bootcampCat"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="projectDisplay">
            <div className="slider">{slider5}</div>
            <div className="projectDescription">
              <h3>Bootcamp Cat</h3>
              <p>
                <Translate useRawText={true}>
                  An interactive jQuery app: A virtual developer cat that needs
                  to be looked after by the user.
                </Translate>
              </p>
              <p className="toolKit">
                jQuery | Sass | Timer | Randomizer | Responsive
              </p>
              <a
                className="projectLink"
                href="https://oksanasam.github.io/bootcampCat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="projectLink"
                href="https://github.com/OksanaSam/bootcampCat"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
