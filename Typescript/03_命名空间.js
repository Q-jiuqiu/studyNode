"use strict";
exports.__esModule = true;
exports.B = void 0;
// 如果包含import或者export文件会被当成一个模块，如果一个文件不带用import或者export的申明，那么它的内容将被食物全局可见的（因此对模块也是可见的）
var a = 1; // 在此文件中创建的变量a是全局的,也就是其他文件中若也创建了a变量那么就会有重名报错的问题
// 解决办法一
exports["default"] = a; // 如果使用了export就不会和其他文件内的同名参数冲突
// 解决办法二
var A;
(function (A) {
    A.a = 1; // 必须使用export否则属性a不会被导出
})(A || (A = {}));
// 原理
// let A_;
// (function (A_) {
//   A_.a = 1
// })(A_ || (A_ = {}))
console.log(A.a, "-"); // A 相当于一个包含了属性名为a的对象
// 命名空间的使用
// 嵌套命名空间
var B;
(function (B) {
    var C;
    (function (C) {
        C.a = 1;
    })(C = B.C || (B.C = {}));
})(B = exports.B || (exports.B = {}));
var AAA = B.C;
console.log(B.C.a, "=", AAA);
