function equal() {
  // 第一组:等于和不等于 == !=
  // 在进行比较时会进行强制类型转换
  // console.log(NaN == NaN); // ->false
  // console.log(NaN != NaN); // ->true
  null == undefined; // -> true
  // 第二组:全等和不全等 === !==
  null === undefined; // ->false
}

equal();
