function myNew() {
  const obj = {}
  const con = [].shift.call(arguments)
  obj.__proto__ = con.prototype
  const result = con.apply(obj, arguments)
  const res = typeof result === 'object' ? result : obj
  return res
}

function person (age) {
  this.age = age
}

console.log(myNew(person, 15));