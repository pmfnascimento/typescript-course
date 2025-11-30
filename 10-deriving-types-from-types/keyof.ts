type User = { name: string; age: number };
type UserKeys = keyof User;

let validkey: UserKeys;

validkey = "name";
validkey = "age";

function getProp<T extends object, K extends keyof T>(obj: T, key: K) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error("Invalid key");
  }
  return val;
}

const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, "isStored");

console.log(isStored);

const user = { name: "Max", age: 23 };
const val = getProp(user, "age");

console.log(val);
