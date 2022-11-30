/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const min = Math.pow(-2, 31), max = Math.pow(2, 31) - 1;
  let strNum = "";
  s = s.trim(s);
  for (let i = 0; i < s.length; i++) {
    if (strNum.length == 0) {
      if (s[i] === "-" || /\d/.test(s[i]) || s[i] === "+") {
        strNum += s[i]
      } else {
        return 0
      }
    } else {
      if (/\d/.test(s[i])) {
        strNum += s[i]
      } else {
        break
      }
    }
  }
  if (strNum === "-") {
    return 0
  } else {
    const num = parseInt(strNum)
    if (isNaN(parseInt(strNum))) {
      return 0
    }
    if (num > max) {
      return max
    } else if (num < min) {
      return min
    } else {
      return num
    }
  }
};

console.log(myAtoi("+12"));

// 法二:自动机https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascriptzi-dong-ji-guan-fang-ti-jie-de-xiang-xi-/