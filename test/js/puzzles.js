/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/

'use strict';

var puzzles = [

    {
        question: 'Это домик—теремок, Он не заперт на замок. В теремке своем без спешки, Она щелкает орешки.',
        answer: [
            'Кошка',
            'Белка',
            'Птичка'
        ],
        correctAnswer: 'Белка'
    },
    
    {
        question: 'Стайкой шумной прилетели, Крошки, зернышки все съели.',
        answer: [
            'Воробьи',
            'Вороны',
            'Крокодилы'
        ],
        correctAnswer: 'Воробьи'
    },
    
    {
        question: 'Как мяч круглый, как тельняшка полосатый.',
        answer: [
            'Вишня',
            'Яблоко',
            'Арбуз'
        ],
        correctAnswer: 'Арбуз'
    },   
    
    {
        question: 'На дереве сидит, «Кар—кар» кричит.',
        answer: [
            'Петух',
            'Синичка',
            'Ворона'
        ],
        correctAnswer: 'Ворона'
    },
    
    {
        question: 'Прямо с ходу, Лезут в воду, Шеи длинные, Но не лебединые.',
        answer: [
            'Гуси',
            'Куры',
            'Индюки'
        ],
        correctAnswer: 'Гуси'
    }
];


localStorage.setItem('puzzles', JSON.stringify(puzzles));


















