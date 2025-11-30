var names = ["Max", "Ana"];
var store = {};
store.name = "Max";
store.age = "27";
store.isInstructor = true;
console.log(store);
function merge(a, b) {
    return [a, b];
}
var result = merge("Max", "Ana");
var numbers = merge(2, 4);
console.log(result, numbers);
function anotherMerge(a, b) {
    return [a, b];
}
var anotherResult = anotherMerge("Max", 27);
console.log(anotherResult);
