/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
// var maxSatisfied = function (customers, grumpy, X) {
//   for (const key in grumpy) {
//     if (Object.hasOwnProperty.call(grumpy, key)) {
//       grumpy[key] = !grumpy[key] * 1;
//     }
//   }
//   let max = 0;
//   for (let i = 0; i < grumpy.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < grumpy.length; ) {
//       if (i === j) {
//         for (let k = i; k < i + X && k < customers.length; k++) {
//           sum += customers[k];
//         }
//         j = j + X;
//         if (j >= grumpy.length) {
//           break;
//         }
//       }
//       sum += customers[j] * grumpy[j];
//       j++;
//     }
//     max = max < sum ? sum : max;
//   }
//   return max;
// };

// 滑动窗口
var maxSatisfied = function (customers, grumpy, X) {
  let total = 0,
    maxIncrease = 0;
  for (const key in grumpy) {
    if (Object.hasOwnProperty.call(grumpy, key)) {
      total += !grumpy[key] * 1 * customers[key];
    }
  }
  for (let i = 0; i <= customers.length - X; i++) {
    let increase =
      customers[i] * grumpy[i] +
      customers[i + 1] * grumpy[i + 1] +
      customers[i + 2] * grumpy[i + 2];
    maxIncrease = Math.max(maxIncrease, increase);
  }

  return maxIncrease + total;
};

let customers = [1, 0, 1, 2, 1, 1, 7, 5],
  grumpy = [0, 1, 0, 1, 0, 1, 0, 1],
  X = 3;
let res = maxSatisfied(customers, grumpy, X);
console.log(res);
