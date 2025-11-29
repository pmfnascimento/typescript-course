const userName = 'Max';

let age = 20;

age = 29;

var result;

// function add(a: number, b: number) {

//     result = a + b;
//     return result;
// }
// let isOld;
// if (age < 20) {
//     isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// console.log(add(2));

const hobbies: string[] = ['Sports', 'Cooking'];
const activeHobbies: string[] = ['Hiking'];

activeHobbies.push(...hobbies);

// console.log(activeHobbies);

const person = {
    name: 'Max',
    age: 30
};

const copiePerson = { ...person };

const add = (...numbers: number[]) => {

    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};

const addedNumbers = add(2, 4, 6, 8.5, 1.3);
console.log(addedNumbers);



