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
        output += ", "
        if (i % 3 === 0) {
            output += "ping"
        } else {
            output += i;
        }
    }

    return output;
}
