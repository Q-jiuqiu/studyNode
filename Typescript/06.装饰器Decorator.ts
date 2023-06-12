import axios from "axios";
import "reflect-metadata"

// 1.类装饰器 ClassDecorator 返回target--构造函数
function fun1() {
  const Base: ClassDecorator = (target) => {
    console.log(target); // [class Http]
    // 构造函数target可以用来做什么呢?
    // 1.不破坏target自身原有的代码,进行代码扩展,给类增加属性或者方法,起到修饰的作用
    target.prototype.name = "小满";
    target.prototype.fn = () => {
      console.log("哈哈");
    }
  }
  // 编译阶段会调用Base,不需要手动调用
  @Base
  class Http {
    // ...很多代码
  }
  // 等同于
  // Base(Http)

  const http = new Http() as any
  http.fn(); // 输出->哈哈
  console.log(http.name); // 输出->小满

}
// fun1()

// 装饰器工厂 -- 进行传参
function fun2() {
  const Base = (name: string) => {
    const fn: ClassDecorator = (target) => {
      target.prototype.name = name;
    }
    return fn
  }
  @Base("小明")
  class Http {
    // ...很多代码
  }

  const http = new Http() as any
  console.log(http.name); // 输出->小明

}
// fun2()

// 3.方法装饰器 MethodDecorator PropertyDescriptor
// 4.参数装饰器 ParameterDecorator
function fun3() {
  const Base = (name: string) => {
    const fn: ClassDecorator = (target) => {
      target.prototype.name = name;
    }
    return fn
  }

  const Get = (url: string) => {
    const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
      // target -- 为原型对象
      // key -- 方法名称
      // descriptor -- 描述 -- value为方法
      console.log(target, "=", key, "=", descriptor);

      // 获取在目标对象或其原型链上提供的元数据键的元数据值
      const key_ = Reflect.getMetadata("key", target)

      axios.get(url).then(res => {
        descriptor.value(key_ ? res.data[key_] : res.data)
      })
    }

    return fn
  }

  const Result = () => {
    const fn: ParameterDecorator = (target, key, index) => {
      // target -- 原型对象
      // key -- getList名
      // index -- 参数所在位置
      console.log(target, '-', key, "-", index);
      // 储存参数
      Reflect.defineMetadata("key", "result", target)
    }
    return fn
  }

  const Name: PropertyDecorator = (target, key) => {
    // target -- 原型对象
    // key -- 属性名
    console.log("Name", target, key);

  }

  @Base("小明")
  class Http {
    // 5.属性装饰器
    @Name
    xiaoman: string
    constructor() {
      this.xiaoman = "小满"
    }
    @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
    getList(@Result() data: any) {
      // Result是优先于Get去执行的
      console.log(data);

    }
    create() {

    }
  }

  const http = new Http() as any

}

fun3()