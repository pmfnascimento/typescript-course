function getLenght(val) {
    if (typeof val === "string") {
        var numbersOfWords = val.split(" ").length;
        return "".concat(numbersOfWords, " words");
    }
    return val.length;
}
var numWords = getLenght("does this work");
var numItems = getLenght(["Sports", "Cookies"]);
console.log(numWords, numItems);
