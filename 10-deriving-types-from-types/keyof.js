var validkey;
validkey = "name";
validkey = "age";
function getProp(obj, key) {
    var val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("Invalid key");
    }
    return val;
}
var data = { id: 1, isStored: false, values: [1, -5, 10] };
var isStored = getProp(data, "isStored");
console.log(isStored);
var user = { name: "Max", age: 23 };
var val = getProp(user, "age");
console.log(val);
