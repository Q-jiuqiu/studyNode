// 按位非 ~ 按位非操作,可以简单的理解为该值取负值后减1
function fun1() {
  // 假设最高位为4位
  let a = 1;
  console.log(~a); // -2
  let a1 = -1;
  console.log(~a1); // 0
}
fun1();