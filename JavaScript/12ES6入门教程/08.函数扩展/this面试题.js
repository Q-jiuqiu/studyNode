/*
 * @Author: quling
 * @Date: 2023-06-20 15:49:58
 * @LastEditors: quling
 * @LastEditTime: 2023-06-21 15:57:27
 * @Description: 
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\08.函数扩展\this面试题.js
 */

// https://blog.csdn.net/m0_67391521/article/details/126043246

// 面试题一:
// let name = 'window'
// let person = {
//   name: 'person',
//   sayName: function () {
//     console.log(this.name)
//   }
// }
// function sayName() {
//   let sss = person.sayName;
//   sss(); // person
//   person.sayName(); // person
//   (person.sayName)();
//   (b = person.sayName)()
// }
// sayName()

// // 面试题二:
// var name = 'window'
// var person1 = {
//   name: 'person1',
//   foo1: function () {
//     console.log(this.name)
//   },
//   foo2: () => {
//     console.log(this.name)
//   },
//   foo3: function () {
//     return function () {
//       console.log(this.name)
//     }
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name)
//     }
//   }
// }
// var person2 = { name: 'person2' }
// person1.foo1();
// person1.foo1.call(person2);
// person1.foo2();
// person1.foo2.call(person2);
// person1.foo3()();
// person1.foo3.call(person2)();
// person1.foo3().call(person2);
// person1.foo4()();
// person1.foo4.call(person2)();
// person1.foo4().call(person2);

// // 面试题三:
// var name = 'window'
// function Person(name) {
//   this.name = name
//   this.foo1 = function () {
//     console.log(this.name)
//   }
//   this.foo2 = () => console.log(this.name)
//   this.foo3 = function () {
//     return function () {
//       console.log(this.name)
//     }
//   }
//   this.foo4 = function () {
//     return () => { console.log(this.name) }
//   }
// }
// var person1 = new Person('person1')
// var person2 = new Person('person2')
// person1.foo1()
// person1.foo1.call(person2)
// person1.foo2()
// person1.foo2.call(person2)
// person1.foo3()()
// person1.foo3.call(person2)()
// person1.foo3().call(person2)
// person1.foo4()()
// person1.foo4.call(person2)()
// person1.foo4().call(person2)

// // 面试题四:
// var name = 'window'
// function Person(name) {
//   this.name = name
//   this.obj = {
//     name: 'obj',
//     foo1: function () {
//       return function () {
//         console.log(this.name)
//       }
//     },
//     foo2: function () {
//       return () => {
//         console.log(this.name)
//       }
//     }
//   }
// }
// var person1 = new Person('person1')
// var person2 = new Person('person2')
// person1.obj.foo1()()
// person1.obj.foo1.call(person2)()
// person1.obj.foo1().call(person2)
// person1.obj.foo2()()
// person1.obj.foo2.call(person2)()
// person1.obj.foo2().call(person2)


// // https://juejin.cn/post/7124701341221388318

// 面试题一:
// let name = "window"
// let person = {
//   name: 'person',
//   sayName: function () {
//     console.log(this.name)
//   }
// }
// function sayName() {
//   let fun = person.sayName
//   fun(); // this=>window 默认绑定 独立的函数调用 这个就是全局的window - foo() this:window
//   person.sayName(); // this=>person 隐式绑定 它是由某一个前提调用这个方法。是有一个调用者 obj.foo() this:obj
//   (person.sayName)(); // this=>person 隐式绑定
//   (b = person.sayName)(); // this=>window 赋值表达式（独立函数调用）
// }
// sayName()

// // 面试题二:
// var name = 'window'
// var person1 = {
//   name: 'person1',
//   foo1: function () {
//     console.log(this.name)
//   },
//   foo2: () => console.log(this.name),
//   foo3: function () {
//     return function () {
//       console.log(this.name)
//     }
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name)
//     }
//   }
// }
// var person2 = { name: 'person2' }
// person1.foo1() // person1 隐式调用
// person1.foo1.call(person2) // person2 显示调用 显示调用>隐式调用
// person1.foo2() // window 箭头函数没有this指向 他的上层作用域是对象 没有作用域 再上一层是全局window
// person1.foo2.call(person2); // window 箭头函数没有this 绑定无效
// person1.foo3 // window 因为返回了一个函数 独立函数调用
// person1.foo3.call(person2)(); // window 独立函数调用
// person1.foo3().call(person2);// person2 最终调用返回函数,这个返回的函数调用了call使用的是显示绑定
// person1.foo4()(); // person1 监听函数不绑定this,上层作用域是person1
// person1.foo4.call(person2)();// person2 显示给foo4方法绑定了一个this为person2 再次调用foo4()为箭头函数,他的上层作用域被现实绑定了person2
// person1.foo4().call(person2); // person1 先执行foo4返回一个箭头函数,箭头函数this绑定无效,上传作用域为person1

// // 面试题三:
// var name = 'window'
// function Person(name) {
//   this.name = name
//   this.foo1 = function () {
//     console.log(this.name)
//   }
//   this.foo2 = () => console.log(this.name)
//   this.foo3 = function () {
//     return function () {
//       console.log(this.name)
//     }
//   }
//   this.foo4 = function () {
//     return () => { console.log(this.name) }
//   }
// }
// var person1 = new Person('person1')
// var person2 = new Person('person2')
// person1.foo1() // person1 this指向创建的实例上(会拷贝一份一模一样的数据早实例上)
// person1.foo1.call(person2) // person2 显示绑定
// person1.foo2() /// person1 foo2箭头函数,指向上一层作用域
// person1.foo2.call(person2) // person1 this不能通过显示绑定修改this指向
// person1.foo3()() // window foo3返回一个方法,foo3()()为单独调用this指向全局
// person1.foo3.call(person2)() // window foo3()()为单独调用this指向全局
// person1.foo3().call(person2) // person2 将原来全局的this指向person2
// person1.foo4()() // person1 foo4()()为一个箭头函数,箭头函数this指向上层作用域
// person1.foo4.call(person2)() // person2 foo4()()为箭头函数,上层作用域foo4()this显示绑定为person2
// person1.foo4().call(person2) //person1 foo4()()为箭头函数,显示绑定不生效,上层this为person1

// // 面试题四:
var name = 'window'
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(Object.getOwnPropertyDescriptors(this), this);
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')
person1.obj.foo1()() // window foo1()()为独立调用 this指向window
person1.obj.foo1.call(person2)() // window foo1()()为独立调用 this指向window
person1.obj.foo1().call(person2) // person2 显示绑定 this指向person2 (person1.obj.foo1()这句话得到返回函数后，使用显示调用绑定person2，this指向person2
person1.obj.foo2()() // obj foo2()()为箭头函数,this指向上一层作用域 obj (person1.obj.foo2()这句话得到返回函数后调用，但是箭头函数没有this，向上一层作用域找，上一层作用域为foo2函数，foo2是被obj对象调用的，所以this指向obj对象)
person1.obj.foo2.call(person2)() // person2 上一层作用域修改为person2 (person1.obj.foo2.call(person2)将foo2的上层作用域指向了person2，再进行调用的时候，上一层作用域就是person2)
person1.obj.foo2().call(person2) // obj this显示绑定不生效 this指向上一层作用域person2 obj (person1.obj.foo2()的到返回函数，使用显示绑定call无效，上一层作用域为foo2函数，foo2是被obj对象调用的，所以this指向obj对象)

// // https://www.kancloud.cn/ruizhang/js-view/3087237