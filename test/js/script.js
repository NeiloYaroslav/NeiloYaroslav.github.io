/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;(function(){
    'use strict';

    //=====TEMPLATE=====
    var $puzzles = $('#puzzles').html();

    var testPuzzles = JSON.parse(localStorage.getItem('puzzles'));

    var content = tmpl($puzzles, testPuzzles);

    $('.puzzles').append(content);

    //=====CHECK TEST=====   
    
    //Create arrey with correct answer from puzzles object
    var correctAnswerArr = [];
    for (var i = 0; i < testPuzzles.length; i++ ) {
        correctAnswerArr.push(testPuzzles[i].correctAnswer);
    };
    
    console.log('correctAnswerArr: ', correctAnswerArr);
    
    //Create class "selected" from selected answer

    var $radio = $('.form__radio');
    var userAnswerArr = [];
    
//    $radio.on('click', function(){
//        $(this).siblings('.form__answer').addClass('selected');
//            
//        var $userAnswer = $("input:checked").siblings('.form__answer').html();
//            
//        userAnswerArr.push($userAnswer);
//        console.log(userAnswerArr);
//        
//        
//        if ($radio.is(':checked')) {
//            $('.selected').removeClass('selected');
//        } else {
//            var $attr = $(this).attr('name');
//            console.log($attr);
//            
////            .$('.selected').removeClass('.selected');
//        };
//        console.log($radio.is(':checked'));
//    });
    

    
    
    var button = $('.form__submit');

    button.mousedown(function(e){
        
        button.addClass('submit-click');
    });
    
    button.mouseup(function(e){
        
        button.removeClass('submit-click');
    });
    
    
    button.on('click', function(e){
        e.preventDefault();
        
        //Create arrey with user answer 
        var $puzzlesSublist = $('.puzzles__sublist');
        console.log($puzzlesSublist[1]);
        
        for (var i = 0; i < testPuzzles.length; i++ ) {
            var $answer = $puzzlesSublist.find('input:checked').siblings('.form__answer').html();
            
            userAnswerArr.push($answer);
        }
        console.log(userAnswerArr);
        
        
        
        
        
        var $userAnswer = $("input:checked").siblings('.form__answer').html();
        
        userAnswerArr.push($userAnswer);
        
        console.log(userAnswerArr);
        
    })



})();


