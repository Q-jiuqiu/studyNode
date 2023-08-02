/*
 * @Author: quling
 * @Date: 2023-06-25 14:55:09
 * @LastEditors: quling
 * @LastEditTime: 2023-06-25 15:12:16
 * @Description: 
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\11.运算符扩展\index.js
 */
// 1.指数运算符(**) 右结合 赋值运算符(**=)
console.log(3 ** 4); // 结果:81 3的4次方等价于 Math.pow(3,4)
console.log((-3) ** 4);
console.log(2 ** 3 ** 2); // 结果:512 相当于 2**(3**2)--右结合性 Math.pow(2, Math.pow(3, 2))
let a = 2
a **= 2
console.log(a); // 4

// 2.链判断运算符(?.) 判断是否有值 不为undefined或者null则继续,否则返回undefined
const firstName = message?.body?.user?.firstName || 'default';
// 三种写法 obj?.pro obj?.[expr] obj?.(..args)
// a?.b // 等同于 a == null ? undefined : a.b
// a?.[x] // 等同于 a == null ? undefined : a[x]
// a?.b() // 等同于 a == null ? undefined : a.b()
// a?.() // 等同于 a == null ? undefined : a()


