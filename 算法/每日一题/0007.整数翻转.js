// https://leetcode-cn.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */

//  调用数组方法
// var reverse = function (x) {
//   let strNum = x + "";
//   let len = strNum.len;
//   let max = Math.pow(2, 31) - 1;
//   let min = Math.pow(-2, 31);
//   if (strNum[0] === "-") {
//     let res = strNum.slice(1, len).split("").reverse().join("") * -1;
//     if (res < min) return 0;
//     else return res;
//   } else {
//     let res = strNum.slice(0, len).split("").reverse().join("") * 1;
//     if (res > max) return 0;
//     else return res;
//   }
// };

// 翻转的思路-----栈
var reverse = function (x) {
  let strNum = x + "";
  let len = strNum.len;
  let max = Math.pow(2, 31) - 1;
  let min = Math.pow(-2, 31);
  if (strNum[0] === "-") {
    let res = strNum.slice(1, len).split("").reverse().join("") * -1;
    if (res < min) return 0;
    else return res;
  } else {
    let res = strNum.slice(0, len).split("").reverse().join("") * 1;
    if (res > max) return 0;
    else return res;
  }
};

let res = reverse(1534236469);
console.log(res);
