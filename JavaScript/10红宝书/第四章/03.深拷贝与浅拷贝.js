// 浅拷贝
function shallowCopy() {
  // 1.Object.assign()
  let target = {
    mark: {
      Chinese: 97,
      math: 88,
    },
  };
  let obj1 = {
    person: {
      name: "kobe",
      age: 41,
    },
    sports: "basketball",
  };
  let obj2 = Object.assign(target, obj1);
  obj2.person.name = "wade";
  obj2.sports = "football";
  // console.log(obj2);
  // console.log(obj1); // { person: { name: 'wade', age: 41 }, sports: 'basketball' }
  // console.log(target === obj2); // true

  // 2.函数库loadsh的clone
  // let _ = require("lodash");
  // let obj2_1 = _.clone(obj1);
  // console.log(obj1.b.f === obj2_1.b.f); // true

  // 3.展开运算符...
  let obj22 = { ...obj1 };
  obj1.person.age = 33;
  // console.log(obj22);
  // console.log(obj1);

  // Array.prototype.concat()
  let arr = [
    1,
    3,
    {
      username: "kobe",
    },
  ];
  let arr2 = arr.concat([99]);
  arr2[2].username = "wade";
  // console.log(arr2); //[ 1, 3, { username: 'wade' } ]

  // Array.prototype.slice()
  let arr_ = [
    1,
    3,
    {
      username: " kobe",
    },
  ];
  let arr3 = arr_.slice();
  arr3[2].username = "wade";
  console.log(arr_); // [ 1, 3, { username: 'wade' } ]
}

// shallowCopy();

function deepCopy() {
  // 1.JSON.parse(JSON.stringify())
  let arr = [
    1,
    3,
    {
      username: " kobe",
    },
  ];
  let arr4 = JSON.parse(JSON.stringify(arr));
  arr4[2].username = "duncan";
  console.log(arr, arr4);

  // 2.函数库的cloneDeep()
  // var _ = require("lodash");
  // var obj1 = {
  //   a: 1,
  //   b: { f: { g: 1 } },
  //   c: [1, 2, 3],
  // };
  // var obj2 = _.cloneDeep(obj1);
  // console.log(obj1.b.f === obj2.b.f); // false

  // 3.手写递归方法
  // 遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝。
}

deepCopy();
