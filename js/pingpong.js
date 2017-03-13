function Calculator(skinName){
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(endNum) {
    var output = "1";

    for (i = 2; i <= endNum; i++) {
        output += ", ";
        if (i % 3 === 0 && i % 5 !== 0) {
            output += "ping";
        } else if (i % 3 !== 0 && i % 5 === 0) {
            output += 'pong';
        } else if (i % 3 === 0 && i % 5 === 0) {
            output += 'pingpong';
        } else {
            output += i;
        }
    }

    return output;
};

exports.nickCalculator = Calculator;
