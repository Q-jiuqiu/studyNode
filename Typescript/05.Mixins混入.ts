interface Name {
  name: string
}
interface Age {
  age: number
}
interface Sex {
  sex: string
}

let a: Name = { name: "Mike" }
let b: Age = { age: 12 }
let c: Sex = { sex: "male" }

// 被推断为交叉类型
let obj = Object.assign(a, b, c)

class A {
  type: boolean
  constructor(type: boolean) {
    this.type = type
  }
  changeType() {
    this.type = !this.type
  }
}

class B {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class C implements A, B {
  type: boolean = false
  name: string = "Mike"
  changeType() { }
  getName() {
    return this.name
  }
}

mixins(C, [A, B])

function mixins(curClass: any, itemClass: any[]) {
  itemClass.forEach(item => {
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      curClass.prototype[name] = item.prototype[name]
    })
  })
}

let ccc = new C()

console.log(ccc.type);

ccc.changeType()

console.log(ccc.type);