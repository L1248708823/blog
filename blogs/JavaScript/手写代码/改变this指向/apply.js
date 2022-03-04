const apply = function (constructor, args) {
  const context = constructor || window
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}


Function.prototype.apply = apply

function a(a,b) {
  this.a = a
  this.b = b
  console.log(this.a,this.b);
}

const b ={}
a.apply(b, [2,3])
console.log(b);