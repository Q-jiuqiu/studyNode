/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function fairCandySwap(A, B) {
  let sumA = A.reduce((a, b) => a + b);
  let sumB = B.reduce((a, b) => a + b);
  console.log(sumA, sumB);
  for (let i = 0; i < A.length; i++) {
    let tempA = sumA - A[i];
    for (let j = 0; j < B.length; j++) {
      let tempB = sumB - B[j];
      let a = tempA + B[j];
      let b = tempB + A[i];
      if (a == b) {
        return [A[i], B[j]];
      }
    }
  }
}

let res = fairCandySwap([1, 2, 5], [2, 4]);
console.log(res);

// 哈希表
var fairCandySwap = function (A, B) {
  const sumA = _.sum(A),
    sumB = _.sum(B);
  const delta = Math.floor((sumA - sumB) / 2);
  const rec = new Set(A);
  var ans;
  for (const y of B) {
    const x = y + delta;
    if (rec.has(x)) {
      ans = [x, y];
      break;
    }
  }
  return ans;
};
