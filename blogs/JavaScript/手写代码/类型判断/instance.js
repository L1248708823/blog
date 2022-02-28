const myInstanceof = function (obj, constructor) {
  const prototype = constructor.prototype
  let proto = obj.__proto__
  while(true) {
    if (obj === null || obj === undefined ) {
      if (proto === null) return false
      if(obj === prototype) {
        return true
      }
      proto = proto.__proto__
    }
  }

}