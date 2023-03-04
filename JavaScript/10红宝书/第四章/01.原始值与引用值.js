// 原始值：简单数据（undefined、null、boolean、string、number、symbol）,我们操作的是实际的数据，但是当我们使用了new关键字时，就是创建的一个Object类型的实例，也就变成了引用值。
// const str = "111"; // 原始值
// str.name = 1;
// console.log(str.name); // undefined

// const newStr = new String("111"); // 引用值
// newStr.name = 1;
// console.log(newStr.name); // 1
// console.log(typeof newStr);
// 引用值：由多个值构成的对象，我们在操作的是该对象的引用，也就是对象的地址，而非对象本身
// const obj = {};
// const obj1 = obj;
// obj.name = "Mike";
// console.log(obj1.name);

const person = new Object();
function setName1(obj) {
  obj.name = "Mike";
}

setName1(person);
console.log(person.name); // Mike

// 
function setName2(obj) {
  obj.name = "Jake";
  obj = new Object();
  obj.name = "Anna";
}

setName2(person);
console.log(person.name); // Jake
