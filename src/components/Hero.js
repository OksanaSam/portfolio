import React from 'react';
import "../App.scss";
import sketch from '../sketch.png';

// * * * * Font Awesome Icons
import Icon from './Icon.jsx';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// * * * * Smooth Scroll Library
import { animateScroll as scroll } from 'react-scroll';

// * * * * TRANSLATIONS FEATURE
import Translate from 'translate-components';

function Hero(){
    return (
        <>
        {/* HEADER */}
            <header className='hero'>
                <div className='wrapper'>
                    <div className='heroContent'>
                    <div className='heroText'>
                        <div className='text'>
                        <h1><Translate>hi, i'm oksana</Translate></h1> 
                        <p><Translate>(n) a front-end developer</Translate></p>
                        </div>
                        <img className='sketch' src={sketch} alt='sketch'/>
                    </div>
                    <span className='downButton' onClick={() => scroll.scrollMore(500)}
                        ><Icon iconName={faChevronDown} /></span>
                    </div>
                </div>
            </header>
        </>
    )}

export default Hero;