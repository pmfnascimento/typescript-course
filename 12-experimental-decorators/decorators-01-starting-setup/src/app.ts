function Logger(constructor: Function) {
  console.log("logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person obj");
  }
}

const person = new Person();
console.log(person);
