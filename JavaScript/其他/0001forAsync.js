// 模拟异步请求
function asynchronousRequest(name) {
  // setTimeout(() => {
  //   console.log("-", name, "-");
  // })
  return new Promise((resolve, reject) => {
    resolve(name)

    // if (name % 2 === 0) {
    //   resolve("success" + name)
    // } else {
    //   reject("fail" + name)
    // }
  })
}

async function test1() {
  let arr = [1, 2];
  console.log("start");
  for (let i = 0; i < arr.length; i++) {
    let res = await asynchronousRequest(arr[i])
    console.log(res);
  }
  console.log("end");
}
// 输出 start 1 2 end

function test2() {
  let arr = [1, 2];
  console.log("start");
  arr.map(async i => {
    let res = await asynchronousRequest(i)
    console.log(res);
  })
  console.log("end");
}
// 输出 start end 1 2


async function test3() {
  let arr = [1, 2];
  console.log("start");
  let res = await Promise.all(arr.map(async i => {
    return await asynchronousRequest(i)
  }))
  console.log(res);
  console.log("end");
}
// 输出 start [1,2] end 注意前提是要所以的promise状态都为fulfilled 若有的promise状态为rejected则会抛出异常

test3()
