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

function App() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const ref = React.useRef();
  const sliding = isMenuOpen ? 'sliding' : null;
  const open = isMenuOpen ? 'open' : null;

  const openMenu = () => {
    // setIsMenuOpen(!isMenuOpen);
    console.log('click');
  };

  useOnClickOutside(ref, openMenu);

  // const handleClick = () => {
    
  // };

  


  


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Fragment>
        <nav>
          <div className='wrapper'>
            <div className='navBar'>
              <img className='mainLogo' ref={ref} src={logo} alt='logo' />
              <ul className={`testUl ${sliding}`}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                  {/* <a href='/about'>About</a> */}
                  {/* <Link to="/#aboutId">About</Link> */}
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
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


