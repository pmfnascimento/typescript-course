function getLenght(val: any[]): number;
function getLenght(val: string): string;
function getLenght(val: string | any[]) {
  if (typeof val === "string") {
    const numbersOfWords = val.split(" ").length;
    return `${numbersOfWords} words`;
  }
  return val.length;
}

const numWords = getLenght("does this work");
const numItems = getLenght(["Sports", "Cookies"]);
console.log(numWords, numItems);
