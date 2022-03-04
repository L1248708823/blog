const call = function (constructor, ...args) {
  const context = constructor || window
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}


Function.prototype.call = call

function a(a,b) {
  this.a = a
  this.b = b
  console.log(this.a,this.b);
}

const b ={}
a.call(b,1,2)
console.log(b);