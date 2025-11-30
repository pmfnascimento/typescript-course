function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    age = 35;
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
person.greet();
console.log(person);
