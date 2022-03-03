/**
 * 什么叫函数柯里化？其实就是将使用多个参数的函数转换成一系列使用一个参数的函数的技术。还不懂？来举个例子。
 */
 function curry(fn) {
  let judge = (...args) => {
      if (args.length == fn.length) return fn(...args)
      console.log(...args);
      return (...arg) => judge(...args, ...arg)
  }
  return judge
}


function add(a, b, c) {
  return a + b + c
}
add(1, 2, 3)
let addCurry = curry(add)
addCurry(1)(2)(3)




