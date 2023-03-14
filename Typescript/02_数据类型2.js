// 元组类型
function fun1() {
    // 数组的变种 不同之处在于:数组长度不固定 元组长度固定,并且类型可以不同
    // let arr: any[] = [1, false]
    var arr = [1, false];
    // let arr: readonly [number, boolean] = [1, false] // 改变值和数组长度是被禁止的
    arr[0] = 66;
    // arr[0] = "stirng" 不能将类型“string”分配给类型“number”。
    arr.push(2); // 只能插入数字或者布尔值,因为数组被判断为数值和布尔值的联合类型
    // arr[2] // 报错 长度为 "2" 的元组类型 "[number, boolean]" 在索引 "2" 处没有元素. 即使push了一个参数但是任然出现元组越界的情况
    var arr2 = [1];
    // 多维数组的定义
    var excel = [
        ["小满", "女", 1],
        ["小满", "女", 1]
    ];
}
// 枚举类型
function fun2() {
    // 关键字 enum
    // 1.数字枚举
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    console.log(Color.red); // 0
    console.log(Color.green); // 1
    console.log(Color.blue); // 2
    console.log("====");
    // 2.增加枚举
    var Color1;
    (function (Color1) {
        Color1[Color1["red"] = 1] = "red";
        Color1[Color1["green"] = 2] = "green";
        Color1[Color1["blue"] = 3] = "blue";
    })(Color1 || (Color1 = {}));
    console.log(Color1.red); // 1
    console.log(Color1.green); // 2
    console.log(Color1.blue); // 3
    console.log("====");
    // 3.自定义枚举
    var Color2;
    (function (Color2) {
        Color2[Color2["red"] = 1] = "red";
        Color2[Color2["green"] = 4] = "green";
        Color2[Color2["blue"] = 5] = "blue";
    })(Color2 || (Color2 = {}));
    console.log(Color2.red); // 1
    console.log(Color2.green); // 4
    console.log(Color2.blue); // 5
    console.log("====");
    // 4.字符串枚举 每个枚举值都要赋值 因为字符串枚举没有自增长的行为
    var Color3;
    (function (Color3) {
        Color3["red"] = "red";
        Color3["green"] = "green";
        Color3["blue"] = "blue";
    })(Color3 || (Color3 = {}));
    console.log(Color3.red); // red
    console.log(Color3.green); // green
    console.log(Color3.blue); // blue
    console.log("====");
    // 5.异构枚举
    var Color4;
    (function (Color4) {
        Color4[Color4["yes"] = 1] = "yes";
        Color4["no"] = "no";
    })(Color4 || (Color4 = {}));
    console.log(Color4.yes); // 1
    console.log(Color4.no); // no
    console.log("====");
    var obj = {
        // red: 1
        red: Color.red
    };
    var code = 0;
    if (code === 0 /* Types.success */) { }
    var Types1;
    (function (Types1) {
        Types1[Types1["success"] = 0] = "success";
        Types1[Types1["fail"] = 1] = "fail";
    })(Types1 || (Types1 = {}));
    var code1 = 0;
    if (code1 === Types1.success) { }
    // 8.反向映射 可以通过key来读取value 也可以通过value来读取key
    var Types2;
    (function (Types2) {
        Types2[Types2["success"] = 0] = "success";
        Types2[Types2["fail"] = 1] = "fail";
    })(Types2 || (Types2 = {}));
    var success = Types2.success;
    var key = Types2[success];
    console.log("key:", key, "-value:", success); // 0
}
fun2();
