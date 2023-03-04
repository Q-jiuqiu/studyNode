function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc(); // Mozilla

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
