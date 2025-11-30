let names: Array<string> = ["Max", "Ana"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = "Max";
store.age = "27";
store.isInstructor = true;

console.log(store);
