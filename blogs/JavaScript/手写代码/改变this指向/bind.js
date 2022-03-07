function bind (context) {
  const _this = this
  let args = [...arguments].slice(1)
  if(typeof this !== 'function') {
    throw Error('达咩')
  }
  return function F () {
    // if(_this instanceof ).
     // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      // ，对于 new 的情况来说，不会被任何方式改变 this，所以对于这种情况我们需要忽略传入的 this
      return new _this(...args, ...arguments)
    }
    // 对于直接调用来说，这里选择了 apply 的方式实现，但是对于参数需要注意以下情况：
    // 因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(...arguments)
   return _this.apply(context, args.concat(...arguments))
  }

} 