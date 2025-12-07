// import _ from "lodash";

// const numbers = [1, 2, 3, 4, 5, 6];

// const chunkeddArr = _.chunk(numbers, 2);

// console.log(chunkeddArr);

import { z } from "zod";
import fs from "node:fs";

const dataSchema = z.string();
const content = fs.readFileSync("../data.json");

const parseData = dataSchema.parse(content);
