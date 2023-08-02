/*
 * @Author: quling
 * @Date: 2023-06-20 10:28:47
 * @LastEditors: quling
 * @LastEditTime: 2023-06-20 15:46:07
 * @Description: 函数扩展
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\08.函数扩展\index.js
 */
// function foo(...rest) {
//   console.log('foo-args:', rest);
//   setTimeout((...rest) => {
//     console.log('args:', rest);
//   }, 100);
// }

// foo(2, 4, 6, 8)

// function foo() {
//   setTimeout(() => {
//     console.log('箭头函数id:', this.id); // 42 this指向{id: 42}
//   }, 100);

//   setTimeout(function(){
//     console.log('普通函数id:', this.id); // 21 this指向全局
//   });
// }

// var id = 21; // 全局

// foo.call({ id: 42 });


// const cat = {
//   lives: 9,
//   jumps: () => {
//     this.lives--;
//     console.log(this.lives); // NaN
//   }
// }
// cat.jumps()

// const cat = {
//   lives: 9,
//   jumps(){
//     this.lives--;
//     console.log(this.lives); // 8
//   }
// }
// cat.jumps()

// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val);

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);

// console.log(addThenMult(5)); // => (5+1)*2


// function Fibonacci (n) {
//   if ( n <= 1 ) {return 1};

//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }
// console.log(Fibonacci(10)); // 89
// console.log(Fibonacci(100)); // 超时
// console.log(Fibonacci(1000)); // 超时

// 尾递归优化
// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//   if( n <= 1 ) {return ac2};

//   return Fibonacci2 (n - 1, ac2, ac1 + ac2);
// }

// // console.log(Fibonacci2(10)); // 89
// // console.log(Fibonacci2(100)); // 573147844013817200000
// // console.log(Fibonacci2(1000)); // 7.0330367711422765e+208
// console.log(Fibonacci2(10000)); // 7.0330367711422765e+208

// function trampoline(f) {
//   while (f && f instanceof Function) {
//     f = f();
//   }
//   return f;
// }

// function sum(x, y) {
//   console.log("x, y", x, y);
//   if (y > 0) {
//     return sum.bind(null, x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// function sum1(x, y) {
//   if (y > 0) {
//     return sum1(x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// console.log(sum1(1, 100000)); // 栈溢出
// console.log(trampoline(sum(5, 3)));// 100001


// function tco(f) {
//   var value;
//   var active = false;
//   var accumulated = [];
//   console.log("f",f);
//   return function accumulator() {
//     accumulated.push(arguments);
//     if (!active) {
//       active = true;
//       while (accumulated.length) {
//        const shift = accumulated.shift()
//        value = f.apply(this, shift);
//        console.log(value);
//       }
//       active = false;
//       return value;
//     }
//   };
// }
// var sum1 = tco(function(x, y) {
//   console.log("x,y",x,y);
//   if (y > 0) {
//     return sum1(x + 1, y - 1)
//   }
//   else {
//     return x
//   }
// });
// console.log(sum1(1, 4));
// console.log(sum1.toString());

// function foo() {
//   function bar() {
//     console.trace();
//   }
//   bar();
// }

// foo();