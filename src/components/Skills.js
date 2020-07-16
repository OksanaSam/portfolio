import React from 'react';
import Translate from 'translate-components';

function Skills(){
    return (
        <>
            <section className='skills'>
                <div className='wrapper'>
                    <h2><Translate useRawText={true}>my skills</Translate></h2>
                    <ul className='skillsList'>
                        <li><p>HTML5</p></li>
                        <li><p>CSS3</p></li>
                        <li><p>Sass</p></li>
                        <li><p>Firebase</p></li>
                        <li><p>Javascript</p></li>
                        <li><p>React</p></li>
                        <li><p>jQuery</p></li>
                        <li><p>RESTful APIs</p></li>
                        <li><p>Responsive Web Design</p></li>
                        <li><p>Web Accessibility</p></li>
                        <li><p>Paired Programming</p></li>
                        <li><p>Git &amp; GitHub</p></li>
                    </ul>
                </div>
            </section>
        </>
    )}

export default Skills;
