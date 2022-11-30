// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let res = 0,
//     len = s.length;
//   if (len <= 1) {
//     return len;
//   }
//   let left = 0,
//     right = 1;
//   while (right < len) {
//     let substr = s.slice(left, right);
//     if (!substr.includes(s[right])) {
//       res = res > right - left + 1 ? res : right - left + 1;
//       right++;
//     } else {
//       left++;
//     }
//   }
//   return res;
// };

// 答案
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 定位滑动窗口
  let left = 0,
    right = 0;
  // 记录结果
  let res = 0;
  // 记录滑动窗口中的字符数
  const window = new Map();
  // 遍历字符串
  while (right < s.length) {
    // 进入窗口的字符c
    let c = s[right];
    // 扩大窗口
    right++;
    // 记录字符c的个数
    window.set(c, window.has(c) ? window.get(c) + 1 : 1);
    // 如果字符c个数超过1，表示窗口中出现重复的字符
    while (window.get(c) > 1) {
      // 离开窗口的字符d
      let d = s[left];
      // 收缩窗口
      left++;
      // 更新字符d的个数
      window.set(d, window.get(d) - 1);
    }
    // 更新结果，取最大的子串长度
    res = Math.max(res, right - left);
  }
  // 返回结果
  return res;
};

let res = lengthOfLongestSubstring("tmmzuxt");
console.log(res);
