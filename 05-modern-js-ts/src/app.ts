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

const add = (a: number, b: number) => a + b;

console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}



