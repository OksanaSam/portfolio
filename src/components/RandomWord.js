import React, { useState, useEffect } from 'react';

function RandomWord(){

    const funFacts = ['Korean movies', 'React', 'Iced Coconut Lattes', 'Pastel Colours', 'Minimalism', 'Virtual Traveling', 'Art History', 'Balcony Parties', 'Pilates', `You Don't Know JS`];

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
            <span>Currently into: {randomFact}</span>
        </>
    )}

export default RandomWord;