function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

@logger
class Person {
  name = "Max";

  greet() {
    console.log("Hi, I am " + this.name);
  }
}

let person = new Person();
let person2 = new Person();
