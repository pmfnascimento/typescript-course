"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
node_fs_1.default.writeFileSync('hello.txt', 'Hello, World!');
let userName;
userName = 'Max';
console.log(userName);
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
//# sourceMappingURL=app.js.map