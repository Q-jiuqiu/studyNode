const MyPromise = require("./MyPromise");
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

promise.then(
  (value) => {
    console.log("resolve", value);
  },
  (reason) => {
    console.log("reject", reason);
  }
);
