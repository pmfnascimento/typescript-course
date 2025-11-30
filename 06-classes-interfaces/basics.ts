// class User {

//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

class User {

    readonly hobbies: string[] = [];

    constructor(public name: string, private readonly age: number) { }

    greet() {
        console.log('My age: ' + this.age);
    }
}

const max = new User('Max', 23);
const fred = new User('Fred', 23);

max.hobbies.push('Cooking');
console.log(max, fred);
