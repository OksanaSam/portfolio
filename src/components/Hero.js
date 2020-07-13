import React from 'react';
import "../App.scss";
import Icon from './Icon.jsx';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import sketch from '../sketch.png';

function Hero(){
    return (
        <>
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
                        ><Icon iconName={faChevronDown} /></span>
                    </div>
                </div>
            </section>
        </>
    )}

export default Hero;