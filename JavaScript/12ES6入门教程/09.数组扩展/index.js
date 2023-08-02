/*
 * @Author: quling
 * @Date: 2023-06-20 15:46:13
 * @LastEditors: quling
 * @LastEditTime: 2023-06-20 17:17:15
 * @Description: 
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\09.数组扩展\index.js
 */
// function nameFun(...rest) {
//   console.log(rest);
// }
// nameFun({ name: 11, age: 11 })

// function push(array, ...items) {
//   console.log(array, ...items);
//   // array.push(...items);
// }

// const arr = [1, 2, 3]
// push(arr, 12, 34, 6)

// // const a1 = [1, 2];
// // // const a2 = a1.concat();// 浅拷贝-数组为基础类型时可以算深拷贝-只深拷贝一层
// // const a2 = [...a1] // 浅拷贝-数组为基础类型时可以算深拷贝-只深拷贝一层
// // a2[0] = 2;
// // console.log(a1, a2);

// const o1 = { name: { like: "222" }, age: 2 };
// const o2 = { ...o1 } //浅拷贝-只深拷贝一层
// o2.name.like = "sss"
// console.log(o1, o2);


// Number.prototype[Symbol.iterator] = function* () {
//   let i = 0;
//   let num = this.valueOf();
//   while (i < num) {
//     yield i++;
//   }
// }
// console.log([...5])

// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// };

// // ES5 的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// // ES6 的写法
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c'] 只要有length属性就可以转为数组
// // let arr3 = [...arrayLike]; // 报错:arrayLike is not iterable 因为没有iterable接口
// console.log(arr1, arr2);

// fill 填充的是同一个地址
let arr = new Array(3).fill({ name: "Mike" });
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]