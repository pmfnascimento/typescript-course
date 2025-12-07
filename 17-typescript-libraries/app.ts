import _ from "lodash";

const numbers = [1, 2, 3, 4, 5, 6];

const chunkeddArr = _.chunk(numbers, 2);

console.log(chunkeddArr);
