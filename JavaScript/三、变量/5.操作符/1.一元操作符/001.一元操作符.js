// A. 一元操作符 ++ -- (自增/自减)
// 使用
function fun1() {
  let a1 = 1;
  let a2 = 20;

  console.log(a1++); // 1
  console.log(++a1); // 3

  console.log(a1--); // 3
  console.log(--a1); // 1

  console.log(a1-- - a2); // -19
  console.log(--a1 - a2); // -21
}
// fun1()

// 一元操作符 (++ --) 可实现隐式转换
function fun2() {
  // 字符串 1.如果字符串是有效数字,先转换成数字类型在进行运算,结果为数字类型
  let test = "123";
  console.log(++test); // 124
  console.log(--test); // 123
  // 字符串 2.如果字符串不是有效数字,则输出NaN
  let test1 = "123a";
  console.log(++test1); // NaN
  console.log(--test1); // NaN
  // 布尔类型 1.true转换成1 再进行运算
  let test2 = true;
  console.log(++test2); // 2
  console.log(--test2); // 1
  // 布尔类型 2.false转换成0 再进行运算
  let test3 = false;
  console.log(++test3); // 1
  console.log(--test3); // 0
  // 浮点型 直接运算
  let test4 = 123.45;
  console.log(++test4); // 124.45
  console.log(--test4); // 123.45
  // 对象
  // 1.先调用valueOf方法取得操作的值, 再进行上述规则的转换
  // 2.若valueOf()为NaN ,则再调用toString方法取得操作值,在进行上述操作
  let test5 = { age: 1 };
  console.log(++test5); // NaN
  console.log(test5.valueOf()); // NaN
  console.log(test5.toString()); // NaN string
  let test6 = {
    valueOf() {
      return -1;
    },
  };
  console.log(++test6); // 0
  console.log(test6.valueOf()); // 0
  console.log(test5.toString()); // NaN string
}
// fun2();

// B. 一元操作符 + - 可实现隐式转换
function fun3() {
  // 同++ -- 一样先执行valueOf()/toString()方法,再进行转换
  console.log(+"123"); // 123
  console.log(-"123"); // -123
  console.log(+"123a"); // NaN
  console.log(-"123a"); // NaN
  console.log(+true); // 1
  console.log(-true); // -1
  console.log(+false); // 0
  console.log(-false); // -
  console.log(+123.45); // 123.45
  console.log(-123.45); // -123.45
  let obj = {
    valueOf() {
      return -1;
    },
  };
  console.log(+obj); // -1
  console.log(-obj); // 1
}
fun3();
