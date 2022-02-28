const typeOf = function(val) {
  return Object.prototype.toString.apply(val).slice(8,-1).toLowerCase()
}

console.log(typeOf(5))