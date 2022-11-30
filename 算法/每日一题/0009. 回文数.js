/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let strX = x + ""
  let start = 0, end = strX.length - 1;
  while (start < end) {
    if (strX[start] != strX[end]) {
      return false
    }
    start++;
    end--;
  }
  return true
};

console.log(isPalindrome(-121));