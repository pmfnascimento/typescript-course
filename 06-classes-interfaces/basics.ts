// class User {

//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

class User {
    constructor(public name: string, public age: number) { }
}

const max = new User('Max', 23);
const fred = new User('Fred', 23);
console.log(max, fred);

