// 4.for语句
function for1() {
  // var 全局变量 会变量提升
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
  }
  // 输出5 5 5 5 5
  console.log("---");
  // let 块级作用域变量
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
  }
  // 输出0 1 2 3 4
}
// for1();

// 5.forin
function forIn() {
  const obj = { name: "Mike", sex: "male", age: 23 };
  for (const key in obj) {
    console.log(key);
  }
  // name sex age
}
// forIn();

// 6.forOf
function forOf() {
  const arr = ["Mike", "male", 23];
  for (const key of arr) {
    console.log(key);
  }
  // Mike male 23
}
// forOf();

// 标签语句
function labelFun() {
  let iNum = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i == 5 && j == 5) {
        break; // break 只跳出一层循环
      }
      iNum++;
    }
  }
  console.log(iNum, "--"); // ->95
  let iNum1 = 0;
  outermost: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i == 5 && j == 5) {
        break outermost; // break 跳出两层循环
      }
      iNum1++;
    }
  }
  console.log(iNum1); // ->55
}
// labelFun();

// switch
function switchFun() {
  const num = 25;
  // 之所以传入一个true,是因为每个case进行比较返回的是一个Boolean
  switch (true) {
    case num < 0:
      console.log("Less then 0");
      break;
    case num >= 0 && num <= 10:
      console.log("Between 0 and 10");
      break;
    case num > 10 && num <= 20:
      console.log("Between 10 and 20");
      break;
    default:
      console.log("More then 20");
      break;
  }
}
switchFun();
