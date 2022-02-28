// 寄生组合
function Parent (value) {
  this.val = value
}

Parent.prototype.getValue = function () {
  console.log(this.val);
  return this.val
}

function Son() {
  Parent.call(this, ...arguments)
}
Son.prototype = Object.create(Parent.prototype, {
  constructor: {
    value:Son,
    enumerable:false,
    writable:true,
    configurable:true
  }
})
Son.prototype.constructor = Son

const child = new Son(1)

child.getValue() // 1
child instanceof Parent // true
console.log(child instanceof Parent);