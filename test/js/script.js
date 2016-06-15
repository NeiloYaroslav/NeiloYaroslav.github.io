/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;(function(){
    'use strict';

    //====TASK====
    
    $('#task__show').on('click', function(){
        $('.header__task').find('.displayNone').removeClass('displayNone');
        
    });
    
    $('#task__hide').on('click', function(){
        $('.task__list').addClass('displayNone');
        $('#task__hide').addClass('displayNone');
    });
    
    
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
    
        
    var userAnswerArr = [];
    var $puzzlesSublist = $('.puzzles__sublist');
    
    $('#submit').on('click', function(e){
        e.preventDefault();
        
        //Create arrey with user answer 
        for (var i = 0; i < $puzzlesSublist.length; i++ ) {
            var $checked = $($puzzlesSublist[i]).find('input:checked').siblings('.form__answer').html();
            
            userAnswerArr.push($checked);
        };
        
        console.log('userAnswerArr: ', userAnswerArr);
        
        //Create modal window
        
        var $modal = $('<div class="puzzles__modal"><div class="modal__wrapper"><div class="modal"><p class="modal__text"></p><div class="modal__button"><input type="reset"  value="Повторить" class="button" id="buttonReset"><input type="button" value="Выйти" class="button" id="buttonExit"></div></div></div></div>');
        
        $('.puzzles').append($modal);
        
        var $modalText = $('.modal__text');
        
        
        //Checked user answer on puzzles
        for (var i = 0; i < correctAnswerArr.length; i++ ) {
            if (correctAnswerArr[i] == userAnswerArr[i]) {
                $modalText.text('Поздравляю! Все загадки отгаданы верно =)');
            } else {
                $modalText.text('Увы! Вы где-то ошиблись');
            };
        };
        
        //Remove modal window
        function exitModal() {
            $(".puzzles__modal").remove();
            userAnswerArr = [];
        }
        
        function resetForm(){
            for (var i = 0; i < $('.form__radio').length; i++) {
                $('input')[i].checked = false;
            };
            $(".puzzles__modal").remove();
            userAnswerArr = [];
        }
        
//        $('.modal__wrapper').one('click', exitModal);
        $('#buttonExit').one('click', exitModal);
        
        $('#buttonReset').one('click', resetForm);
        
        
    });

    //Create submit-ckick style
    
    var button = $('.button');
    
    button.mousedown(function(e){

        button.addClass('button-click');
    });

    button.mouseup(function(e){

        button.removeClass('button-click');
    });
    
    
    
    
    
    
    


})();


