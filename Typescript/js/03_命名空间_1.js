"use strict";
// let a = 1 // 无法重新声明块范围变量“a”
Object.defineProperty(exports, "__esModule", { value: true });
const _03_____1 = require("./03_\u547D\u540D\u7A7A\u95F4");
var A;
(function (A) {
    A.a = 2;
})(A || (A = {}));
console.log(A.a, _03_____1.B.C.a);
