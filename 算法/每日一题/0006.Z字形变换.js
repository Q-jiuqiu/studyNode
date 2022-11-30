/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 思路：https://leetcode-cn.com/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let result = "";
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = "";
  }
  let down = -1, //  在达到 ZZ 字形转折点时，执行反向操作
    index = 0;
  for (let i = 0; i < s.length; i++) {
    arr[index] += s[i];
    if (index == 0 || index == numRows - 1) {
      down = -down;
    }
    index += down; // 更新当前字符 arr 对应的行索引
  }
  result = arr.join("");
  return result;
};
let res = convert("PAYPALISHIRING", 3);
console.log(res);
