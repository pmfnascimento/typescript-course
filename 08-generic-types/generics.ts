let names: Array<string> = ["Max", "Ana"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = "Max";
store.age = "27";
store.isInstructor = true;

console.log(store);

function merge<T>(a: T, b: T) {
  return [a, b];
}

let result = merge("Max", "Ana");
let numbers = merge(2, 4);

console.log(result, numbers);

function anotherMerge<T, K>(a: T, b: K) {
  return [a, b];
}

let anotherResult = anotherMerge("Max", 27);
console.log(anotherResult);

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ username: "Max" }, { age: 35 });
console.log(merged);
