function Logger(logString: string) {
  console.log("LOGGING FACTORY");

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rending templating");

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING")
@WithTemplate("<h1>Person Template</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person obj");
  }
}

const person = new Person();
console.log(person);
