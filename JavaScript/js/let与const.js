"use strict";
/*
 * @Author: quling
 * @Date: 2023-06-19 11:18:21
 * @LastEditors: quling
 * @LastEditTime: 2023-06-19 13:53:33
 * @Description: let 与 const命令
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\01.let 和 const 命令\let与const.ts
 */
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
    function nameFun() {
    }
}
a[6](); // 10
console.log(globalThis);
