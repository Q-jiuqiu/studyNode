function myNew(fn, ...args) {
  let newobj = {};
  newobj.__proto__ = fn.prototype;
  let resObj = fn.apply(newobj, args);
  // 判断如果结果是对象则 返回 ，否则返回 新对象
  return resObj instanceof Object ? resObj : newobj;
}
// 测试
function Parsen() {
  this.name = "龙哥";
  this.age = "18";
}
// Parsen.prototype.getName = function () {
//   return this.name;
// };
// var parsen = myNew(Parsen);

let test = new Parsen()
// console.log(parsen.getName());
console.log(test);
console.log(test.age);