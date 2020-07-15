import React, { useState, useEffect } from 'react';

function RandomWord(){

    const funFacts = ['Korean Movies', 'Iced Coconut Lattes', 'White Colour', 'Petting Cats', 'Virtual Traveling', 'Balcony Parties', 'Pilates', `You Don't Know JS`];

    const [ randomFact, setrandomFact ] = useState();

    const randomizer = () => {
        const randomKeyword = funFacts[Math.floor(Math.random() * funFacts.length)];
        setrandomFact(randomKeyword);
        // console.log(randomKeyword);
    };

    useEffect(() => {  
        setInterval(randomizer, 2000);
    }, []);

    return (
        <>
            <p className='randomFact'>Currently into: <span>{randomFact}</span></p>
        </>
    )}

export default RandomWord;