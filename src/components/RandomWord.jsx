import React, { useState, useEffect } from 'react';
import Translate from 'translate-components';

function RandomWord(){

    const [ randomFact, setrandomFact ] = useState();
    
    useEffect(() => {  
        const funFacts = ['Korean Movies', 'Iced Coconut Lattes', 'Learning New Things', 'Audio Books', 'Baking Matcha Cookies', 'Growing Flowers', 'Petting Cats', 'Virtual Traveling', 'Balcony Parties', 'Pilates', 'Gatsby', `You Don't Know JS`];
        
        const randomizer = () => {
            const randomKeyword = funFacts[Math.floor(Math.random() * funFacts.length)];
            setrandomFact(randomKeyword);
        };

        setInterval(randomizer, 2000);
    }, []);

    return (
        <>
            <p className='randomFact'><Translate useRawText={true}>Currently into: </Translate><span>{randomFact}</span></p>
        </>
    )}

export default RandomWord;