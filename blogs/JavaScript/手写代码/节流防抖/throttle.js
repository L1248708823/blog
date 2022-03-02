/**
 * @description: 
 * @param {*}
 * @return {*}
 */
function throttle(fn, wait = 100) {
  let date = new Date()
  return function() {
   const context = this
   const args = arguments
    const newDate = new Date()
    if(newDate - date >= wait) {
      fn.apply(context, args)
      date = newDate
    }
  } 
}