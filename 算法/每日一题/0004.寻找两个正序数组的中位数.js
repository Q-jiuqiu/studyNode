// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let p1 = 0,
    p2 = 0;
  let len1 = nums1.length,
    len2 = nums2.length;
  let all = [];
  while (p1 < len1 && p2 < len2) {
    if (nums1[p1] <= nums2[p2]) {
      all.push(nums1[p1]);
      p1++;
    } else {
      all.push(nums2[p2]);
      p2++;
    }
  }
  while (p1 < len1) {
    all.push(nums1[p1]);
    p1++;
  }
  while (p2 < len2) {
    all.push(nums2[p2]);
    p2++;
  }
  if (all.length % 2) {
    return all[Math.ceil(all.length / 2 - 1)];
  } else {
    return (all[all.length / 2 - 1] + all[all.length / 2]) / 2;
  }
};

let res = findMedianSortedArrays([0, 0], [0, 0]);
console.log(res);
