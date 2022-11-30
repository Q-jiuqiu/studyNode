// https://leetcode-cn.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */

//  暴力破解法 --- 超出时间限制
// var longestPalindrome = function (s) {
//   let arr = "",
//     max = 0,
//     len = s.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 1; i + j <= len; j++) {
//       let substr = s.slice(i, i + j);
//       let res = check(substr);
//       if (res) {
//         if (substr.length > max) {
//           max = substr.length;
//           arr = substr;
//         }
//       }
//     }
//   }
//   return arr;
// };
// function check(substr) {
//   let reverse = substr.split("").reverse().join("");
//   if (substr === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// }


// 中心扩散法:
// 第一种:aba,中心是b
// 第二种:abba,中心是bb
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  } else {
    let res = "";
    for (let i = 0; i < s.length; i++) {
      // 中心是奇数——s[i]是中心
      isHeart(i, i)
      // 中心是偶数——s[i]和s[i+1]是中心
      isHeart(i, i + 1)
    }
    // 判断是否是中心
    function isHeart(n, m) {
      while (n >= 0 && m < s.length && s[n] == s[m]) {
        n--;
        m++;
      }
      // 循环完成,恰好是不满足条件的
      // 此时m到n的距离是m-n+1,但是边界值n和m不能取,故距离为(m-1)-(n+1)+1=m-n-1
      if (m - n - 1 > res.length) {
        res = s.slice(n + 1, m)
      }
    }
    return res;
  }
};


// 动态规划 
// var longestPalindrome = function (s) {
//   let len = s.length
//   let res = ''
//   //创建二维数组
//   // Array.from(arrayLike:伪数组对象或者可迭代对象,[mapFun:新数组中的每个元素会执行该回调函数,thisArg:执行回调函数 mapFn 时 this 对象])
//   let dp = Array.from(new Array(len), () => new Array(len).fill(0))
//   //从字符串首部开始
//   for (let i = 0; i < len; i++) {
//     //从字符串i前开始依次向前查找
//     for (let j = i; j >= 0; j--) {
//       console.log(s[i] == s[j], "-", (i - j < 2 || dp[j + 1][i - 1]));
//       dp[j][i] = s[i] == s[j] && (i - j < 2 || dp[j + 1][i - 1])
//       if (dp[j][i] && i - j + 1 > res.length) {
//         res = s.substring(j, i + 1)
//       }
//     }
//   }
//   console.log(dp)
//   return res
// };
console.log(longestPalindrome("abbat"));