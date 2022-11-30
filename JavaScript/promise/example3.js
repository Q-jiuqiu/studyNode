const MyPromise = require("./MyPromise");
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

promise.then((value) => {
  console.log("1-start");
  console.log("resolve", value);
  console.log("1-end");
});

promise.then((value) => {
  console.log("2-start");
  console.log("resolve", value);
  console.log("2-end");
});

promise.then((value) => {
  console.log("3-start");
  console.log("resolve", value);
  console.log("3-end");
});
