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

// ---- ///

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Access decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("method logger");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("parameter logger");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  private _title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this._title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this.price = val;
    } else {
      throw new Error("Price must be positive");
    }
  }

  set title(val: string) {
    this._title = val;
  }

  get price() {
    return this._price;
  }

  get title() {
    return this._title;
  }

  @Log3
  getMaximumPrice(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
