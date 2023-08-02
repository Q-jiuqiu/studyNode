/*
 * @Author: quling
 * @Date: 2023-06-25 09:47:41
 * @LastEditors: quling
 * @LastEditTime: 2023-06-25 14:45:56
 * @Description: 
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\10.对象扩展\index.js
 */
// assign()
// 为对象添加方法
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }
// const person1 = new Person("Li", 24)
// const newPerson = Object.assign(Person.prototype, {
//   setHobbies(hobbies) {
//     this.hobbies = hobbies
//   }
// })
// person1.setHobbies(['swim'])
// console.log(person1);

// __proto__属性: 用来读取或者设置当前对象的原型(prototype)

// function Rectangle() {
//   // ...
// }
// const rec = new Rectangle();
// console.log(Object.getPrototypeOf(rec))
// console.log(Rectangle.prototype)

// console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)
// // true
// Object.setPrototypeOf(rec, Object.prototype);
// console.log(Object.getPrototypeOf(rec))
// console.log(Rectangle.prototype)
// console.log(Object.getPrototypeOf(rec) === Rectangle.prototype)


// values()
// const obj = { 100: 'a', 2: 'b', 7: 'c' };
// Object.values(obj)
// // ["b", "c", "a"] //属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a 

// const obj = Object.create({}, {p: {value: 42}});
// Object.values(obj) // [] 因为p未显示声明为枚举值 {p: {value: 42}}等价于使用 Object.getOwnPropertyDescriptors()
// const obj = Object.create({}, {p:
//   {
//     value: 42,
//     enumerable: true // 枚举属性为真
//   }
// });
// Object.values(obj) // [42]
// Object.values({ [Symbol()]: 123, foo: 'abc' });// ['abc'] 会过滤属性名为 Symbol 值的属性
// Object.values('foo')// ['f', 'o', 'o'] 会先将foo转成对象{0:'f',1:'o',2:'o'}

// entries()
// fromEntries() entries的逆操作
// var paramsString = "q=URLUtils.searchParams&topic=api" // 接口定义了一些实用的方法来处理 URL 的查询字符串
// var searchParams = new URLSearchParams(paramsString);
// const searchObj = Object.fromEntries(searchParams) // {q: 'URLUtils.searchParams', topic: 'api'}
// for (let p of searchParams) {
//   console.log(p);
//   // 输出
//   // ['q', 'URLUtils.searchParams']
//   // ['topic', 'api']
// }
// searchParams.has("topic") === true; // true
// searchParams.get("topic") === "api"; // true
// searchParams.getAll("topic"); // ["api"]
// searchParams.get("foo") === null; // true
// searchParams.append("topic", "webdev");
// searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
// searchParams.set("topic", "More webdev");
// searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
// searchParams.delete("topic");
// searchParams.toString(); // "q=URLUtils.searchParams"

// hasOwn 判断对象上的属性是自身的(true),还是继承的(false) 注意浏览器兼容问题
// const obj1 = { a: '111' }
// obj1.b = "111"
// const obj2 = Object.create({ a: "111" })
// obj2.b = 111
// console.log(Object.hasOwn(obj1, 'a')); // true
// console.log(obj1.hasOwnProperty('a')); // true
// console.log(Object.hasOwn(obj1, 'b')); // true
// console.log(obj1.hasOwnProperty('b')); // true
// console.log(obj2);
// console.log(Object.hasOwn(obj2, 'a')); // false a是继承属性
// console.log(obj2.hasOwnProperty('a')); // false
// console.log(Object.hasOwn(obj2, 'b')); // true
// console.log(obj2.hasOwnProperty('b')); // true
// const obj = Object.create(null); // 返回的对象obj是没有原型的，不继承任何属性，这导致调用obj.hasOwnProperty()会报错,但是Object.hasOwn()就能正确处理这种情况。
// // obj.hasOwnProperty('foo') // 报错
// console.log(Object.hasOwn(obj, 'foo')); // false
// 区别: (建议使用hasOwn方法)
// 1.hasOwnProperty没有被保护,可能会被重写导致该函数的"意义"失效(除非通过Object.property.hasOwnProperty.call(xx,"a"));而hasOwn方法就不会有这个问题
// hasOwnProperty不适用于:通过使用创建的对象Object.create(null)以及覆盖继承hasOwnProperty()方法的对象。Object.hasOwn() 但克服这些问题是首选