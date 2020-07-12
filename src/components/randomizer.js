import React from 'react';
// funny keywords related to our cohort to be randomly dispayed on screen
const funFacts = ['ThreatenedSwan', 'calc(30 - 3)', 'orbitz', 'Marley', 'Riley', 'pineappleJuice', 'dank', 'survivor', 'cookies', 'gityourselfabreak', 'sonOfJson', 'zoominplz', 'JS = magic', 'undefined', 'keepitdry', 'pizza+sushi',  'projectproject', 'curlyboys', 'gridouttahere', 'gitoffyourlaptop', 'conCATenation', 'cohort27', 'flexYESfloatNO'];


const randomizer = () => {
    const randomKeyword = funFacts[Math.floor(Math.random() * funFacts.length)];
    return randomKeyword;
};

export default randomizer;