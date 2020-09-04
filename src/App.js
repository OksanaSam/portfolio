import React, { useState, useRef } from 'react';
import './App.scss';
import logo from './Logo_SVG_Favicon.svg';

// * * * * TRANSLATIONS FEATURE
import { TranslateProvider } from 'translate-components';
import translations from './translations.json';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';

// * * * * COMPONENTS
import Hero from './components/Hero';
import Simple from './components/Simple';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// * * * * Animation on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

// * * * * Click Outside Function
import useOnClickOutside from './components/useOnClickOutside';

// * * * * Font Awesome Icons
import Icon from './components/Icon.jsx';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {

  AOS.init();

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const ref = useRef();
  const open = isMenuOpen ? 'open' : null;
  const menu = isMenuOpen ? <Icon iconName={faTimes} />  : <Icon iconName={faBars} /> ;


  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(ref, closeMenu);



  return (
      <>
       <TranslateProvider translations={translations} defaultLanguage={'en'}>
        <nav>
          <div className={`slidingNav ${open}`}>
          <ul className='testUl'>
                <li>
                  <a href='/'><Translate useRawText={true}>Home</Translate></a>
                </li>
                <li>
                  <a href='/#about'><Translate useRawText={true}>About</Translate></a>
                </li>
                <li>
                  <a href='/#projects'><Translate useRawText={true}>Projects</Translate></a>
                </li>
                <li>
                  <a href='/#contact'><Translate useRawText={true}>Contact</Translate></a>
                </li>
                <li>
                    <span className='languageButton' onClick={reactTranslateChangeLanguage.bind(this, 'ua')}>UA</span>
                    <span className='languageButton' onClick={reactTranslateChangeLanguage.bind(this, 'en')}>EN</span>
                    <span className='languageButton' onClick={reactTranslateChangeLanguage.bind(this, 'fr')}>FR</span>
                </li>
              </ul>
          </div>
          <div className='wrapper'>
            <div className='navBar'>
              <img className='mainLogo' src={logo} alt='logo' />
              <span className='menuIcon' ref={ref} onClick={openMenu}>{menu}</span>
            </div>
            </div>
          </nav>
          <main>
            <Hero />
            <Simple />
            <About />
            <Skills />
            <Projects />
            <Contact/>
          </main>
        <Footer/>
        </TranslateProvider>
      </>
  );
}

export default App;