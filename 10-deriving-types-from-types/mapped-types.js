var mathOperations = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
};
var mathResults = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(5, 2),
};
mathResults.add = 10;
mathResults.subtract = 5;
console.log(mathResults);
