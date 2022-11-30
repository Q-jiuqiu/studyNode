// https://juejin.cn/post/6945319439772434469
// 手写promise
/**
 * Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行
 
 * Promise 会有三种状态
 *    Pending 等待
 *    Fulfilled 完成
 *    Rejected 失败

  * 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
  * Promise 中使用 resolve 和 reject 两个函数来更改状态；
  * then 方法内部做但事情就是状态判断

  * 如果状态是成功，调用成功回调函数
  * 如果状态是失败，调用失败回调函数
 */
// 新建MyPromise类

// 先定义三个常量表示状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    executor(this.resolve, this.reject);
  }
  // 储存状态的变量，初始值是 pending
  status = PENDING;

  // onFulfilledCallback = null;
  onFulfilledCallbacks = [];
  // 存储失败回调函数
  // onRejectedCallback = null;
  onRejectedCallbacks = [];

  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  // 更改成功后的状态
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  resolve = (value) => {
    // 只有状态是等待,才能执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
      // resolve里面将所有成功的回调拿出来执行
      while (this.onFulfilledCallbacks.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFulfilledCallbacks.shift()(value);
      }
    }
  };
  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
      // resolve里面将所有失败的回调拿出来执行
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
    const promise2 = new MyPromise((resolve, reject) => {
      // 这里的内容在执行器中，会立即执行
      if (this.status === FULFILLED) {
        // 获取成功回调函数的执行结果
        const x = onFulfilled(this.value);
        // 传入 resolvePromise 集中处理
        resolvePromise(x, resolve, reject);
      } else if (this.status === REJECTED) {
        onRejected(this.reason);
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
      }
    });

    return promise2;
  }
}

function resolvePromise(x, resolve, reject) {
  // 判断x是不是 MyPromise 实例对象
  if (x instanceof MyPromise) {
    // 执行 x，调用 then 方法，目的是将其状态变为 fulfilled 或者 rejected
    // x.then(value => resolve(value), reason => reject(reason))
    // 简化之后
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}

module.exports = MyPromise;
