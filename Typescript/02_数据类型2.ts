// 元组类型
function fun1() {
  // 数组的变种 不同之处在于:数组长度不固定 元组长度固定,并且类型可以不同
  // let arr: any[] = [1, false]
  let arr: [number, boolean] = [1, false]
  // let arr: readonly [number, boolean] = [1, false] // 改变值和数组长度是被禁止的

  arr[0] = 66
  // arr[0] = "stirng" 不能将类型“string”分配给类型“number”。

  arr.push(2) // 只能插入数字或者布尔值,因为数组被判断为数值和布尔值的联合类型

  // arr[2] // 报错 长度为 "2" 的元组类型 "[number, boolean]" 在索引 "2" 处没有元素. 即使push了一个参数但是任然出现元组越界的情况

  let arr2: readonly [x: number, y?: boolean] = [1]

  // 元组与type类型别名的用法
  // type first = arr[0] // 报错 “arr”表示值，但在此处用作类型
  type first = typeof arr[0]
  type length = typeof arr["length"]


  // 多维数组的定义
  let excel: [string, string, number][] = [
    ["小满", "女", 1],
    ["小满", "女", 1]
  ]
}


