/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let i = 0, j = 0;
  const sLen = s.length, pLen = p.length;
  while (i < sLen && j < pLen) {
    if (p[j] === ".") {
      // 匹配任意字符
      if (j + 1 < pLen) {
        if (p[j + 1] === "*") {
          i = sLen
        } else {
          i++
        }
      } else {
        i++
      }
    } else if (p[j] === "*") {
      //  匹配零个或多个前面的那一个元素
    } else {
      if (j + 1 < pLen) {
        if (p[j + 1] === "*") {
          if (j > 0 && p[j - 1] === "*") {
            i++
          }
          while (s[i] === p[j]) {
            i++
          }
        } else {
          if (s[i] != p[j]) {
            return false
          } else {
            i++
          }
        }
      }
    }
    j++
  }
  if (i < sLen - 1) {
    return false;
  } else {
    return true
  }
};


console.log(isMatch("mississippi", "mis*is*p*."));//false
// console.log(isMatch("mississippi", "mis*is*ip*."));//true
// console.log(isMatch("aab", "c*a*b"));//true