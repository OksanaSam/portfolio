import React from 'react';
import '../App.scss';
import myPic from '../me.jpg';

function About() {
    return (
      <div className='aboutLong'>
        <div className='navAbout'></div>
          <div className='wrapper'>
            <div className='aboutContent'>
              <div className='aboutPhoto'>
                <img src={myPic} alt='my photo'/>
              </div>
              <div className='myStory'>
                <h2>About me</h2>
                <p>I am a Web Developer with a background in Linguistics and Graphic Design. Passionate about
                    creating accessible and user-friendly websites with clean design and keeping up with the latest trends in Front-End Development.</p>
                <p>Recent Juno College of Technology (formerly HackerYou) graduate.</p>
                <p>Currently into React.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }


export default About;