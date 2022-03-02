/**
 * 改版 后续有空在补
 * @param {*} fn 
 * @param {*} wait 
 * @returns 
 */
function debounce(fn, wait=100) {
  const timer = null
  return function() {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function(){
            fn.apply(context, args)
        }, wait);
  }
}