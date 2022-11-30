console.log("start here");
new Promise((resolve, reject) => {
  console.log("first promise constructor");
  resolve()
}).then(() => {
  console.log("first promise then");
  return new Promise((resolve, reject) => {
    console.log("second promise");
    resolve()
  }).then(() => {
    console.log("second promise then");
  })
}).then(() => {
  console.log("another first promise then");
})
console.log("end here");