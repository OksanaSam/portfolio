import React, { Fragment, useState, useRef } from 'react';
import './App.scss';
import logo from './Logo_Oksana.svg';
// * * * * ROUTER ELEMENTS
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
// * * * * ROUTER ELEMENTS END
import useOnClickOutside from './components/useOnClickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const ref = React.useRef();
  // const sliding = isMenuOpen ? 'sliding' : null;
  const open = isMenuOpen ? 'open' : null;
  const closed = !isMenuOpen ? 'closed' : null;

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('open', isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    console.log('close', isMenuOpen);
  };


  useOnClickOutside(ref, closeMenu);

  // const handleClick = () => {
    
  // };

    let hamburger = (<FontAwesomeIcon icon={faBars} size="1x" />);
    let closedMenu = (<FontAwesomeIcon icon={faTimes} size="1x" />);
    const menu = isMenuOpen ? closedMenu : hamburger ;
  

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Fragment>
        <nav>
          <div className={`slidingNav ${open}`}>
          <ul className='testUl'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                  {/* <a href='/home/props.aboutId'>About</a> */}
                  {/* <Link to="/#aboutId">About</Link> */}
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
          </div>
          <div className='wrapper'>
            <div className='navBar'>
              <img className='mainLogo' src={logo} alt='logo' />
              <span className='menuIcon' ref={ref} onClick={openMenu}>{menu}</span>
              {/* <ul className='testUl'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link> */}
                  {/* <a href='/about'>About</a> */}
                  {/* <Link to="/#aboutId">About</Link> */}
                {/* </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li ref={ref} onClick={openMenu}>{hamburger}</li> */}
              {/* </ul> */}
            </div>
            </div>
          </nav>
          <main>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About}/>
          </main>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;


