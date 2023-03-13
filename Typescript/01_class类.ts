// 一、class的基本用法 继承 和 类型约束 implements
interface Options {
  el: string | HTMLElement
}
interface vueCls {
  options: Options
  init(): void
}

// 虚拟DOM 简单版
interface Vnode {
  tag: string // div section header
  text?: string
  children?: Vnode[]
}
class Dom {
  // constructor(name: string) {
  //   console.log(name);
  // }
  // 创建节点
  private createElement(el: string) {
    return document.createElement(el)
  }
  // 填充文本
  private setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  // 渲染函数
  // private render(data: Vnode) {
  protected render(data: Vnode) {
    let root = this.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach(item => {
        let child = this.render(item) // 但是自己调用自己没有问题
        root.appendChild(child)
      })
    } else {
      this.setText(root, data.text as string | null)
    }
    return root
  }
}

let dom = new Dom()
// dom.render({ tag: "div" })
//private--属性“render”为私有属性，只能在类“Dom”中访问。
// protected--属性“render”受保护，只能在类“Dom”及其子类中访问。

// Vue继承了Dom具有render方法 通过implements关键字进行类型约束使得Vue的参数已经方法符合定义的vueCls
class Vue extends Dom implements vueCls {
  options: Options
  readonly name: string
  static a: string
  constructor(options: Options) {
    // super("QL")
    super() // 继承后必须在最前面增加super() 相当于是父类的prototype.constructor.call() 说明可以通过super(参数)个父类的constructor传参
    this.options = options
    this.init()
    this.name = "1"
    // super.render() 可以通过super直接调用父类的方法以及属性
  }
  static xxxx() {
    return "1.0.0"
  }
  static version() {
    this.xxxx()
    // this.init() // 报错 类型“typeof Vue”上不存在属性“init”。
    return "1.0.0"
  }
  init(): void {
    // 虚拟dom 就是通过js去渲染真实dom
    let data: Vnode = {
      tag: "div",
      children: [
        {
          tag: "section",
          text: "我是子节点1"
        },
        {
          tag: "section",
          text: "我是子节点2"
        }
      ]
    }
    let app = typeof this.options.el === "string" ? document.querySelector(this.options.el) : this.options.el
    // 当render标记了private修饰符后报错 属性“render”为私有属性，只能在类“Dom”中访问。ts(2341)
    // 当render标记了protected修饰符后不报错
    app?.appendChild(this.render(data))

  }
}
let vue = new Vue({
  el: "#app"
})

// 二.class修饰符 readonly private protected public
// readonly 只能运用在属性或索引签名上表明不能进行修改
// private 增加在属性和方法前 只能在内部使用,使方法和属性不能被继承,并且实例化后也不能掉用该方法
// protected 增加在属性和方法前 在内部和子类中能使用,但是实例化后不能调用该方法
// public 所有的方法默认就是public 可以在内部、子类和实例使用

// 3.super 原理
// 继承后必须在最前面增加super()

// 4.static 静态方法 不通过new,而是通过实例本身就能直接调用的方法为静态方法 静态方法中的this只能调用到其他静态方法以及静态属性,调用不了其他方法及属性
// Promise.all()
// vue.version() // 报错 属性“version”在类型“Vue”上不存在。
Vue.version()

// 5.get set
class Ref {
  _value: any
  constructor(value: any) {
    this._value = value
  }

  // 拦截读取值的操作,并进行相应的处理
  get value() {
    return this._value + "vv"
  }

  // 拦截设置值的操作,并进行相应的处理
  set value(newVal) {
    this._value = newVal + "QL"
  }
}

const ref = new Ref("哈哈哈")
console.log(ref.value); // 哈哈哈vv
ref.value = "你好"
console.log(ref.value); // 你好QLvv
