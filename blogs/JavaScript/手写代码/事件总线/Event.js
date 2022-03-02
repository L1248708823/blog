class Event{
  cache = {}
  constructor() {
    this.cache = {}
  }

  on(name, fn) {
    if(this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name,fn) {
    const task =  this.cache[name]
    if(!task) {
      return
    }

    const index = task.findIndex(f=>{
      return f === fn 
    })

    if(index > -1) {
      task.splice(index,1)
    }
  }


  emit(name, ...args) {
    // 浅克隆一份目的是为了避免通过 once 安装的监听器在移除的过程中出现顺序问题
   const task = this.cache[name]?.slice()
   if(!task) {
     return
   }
   task.foreach(fn=>{
     fn(...args)
   })
  }

  once(name, fn) {
     // 对回调函数进行包装，使其执行完毕自动被移除
    const wrapper = (...args) => {
      fn(...args)
      this.off(name, wrapper)
    }
    this.on(name, wrapper)
  }
}