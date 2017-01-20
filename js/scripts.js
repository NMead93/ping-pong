$(function () {
    $('.input').submit(function (event) {
        event.preventDefault()
        var inputNum = parseInt($('.input input').val());

        $('.output').text(pingPong(inputNum));
    })
})

function pingPong (endNum) {
    var output = "1";

    for (i = 2; i <= endNum; i++) {
        output += ", " + i;
    }

    return output;
}
