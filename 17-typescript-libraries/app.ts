// import _ from "lodash";

// const numbers = [1, 2, 3, 4, 5, 6];

// const chunkeddArr = _.chunk(numbers, 2);

// console.log(chunkeddArr);

import { z } from "zod";
import fs from "node:fs";

const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])),
});

const content = JSON.parse(fs.readFileSync("../data.json").toString());

const parseData = dataSchema.parse(content);

console.log(parseData);
