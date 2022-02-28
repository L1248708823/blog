const a = [1, [2, [3]]]

// 原来的效果 貌似不行 算了自己写
// console.log(Array.prototype.flat(2).call(a));

const flat = function(arr) {
  while(arr.some(el=>{
    return Array.isArray(el)
  })) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flat(a));