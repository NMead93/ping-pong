var Calculator = require('./../js/pingpong.js').nickCalculator;


$(function() {
    $('.input').submit(function(event) {
        event.preventDefault();
        var inputNum = parseInt($('.input input').val());

        $('.output').text(Calculator.pingPong(inputNum));
    });
});
