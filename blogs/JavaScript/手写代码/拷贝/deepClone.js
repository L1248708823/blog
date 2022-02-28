function deepClone(obj) {
  function isObject(obj) {
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
  }
  if(!isObject(obj)) {
    return obj
  }
  const newObj = Array.isArray(obj) ? [...obj] : {...obj}
  for(let key in obj) {
    newObj[key] =  isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  }
  return newObj
}

const a = {
  b:1,
  c:2
}
const b = deepClone(a)
const c = a

console.log(a===b,a===c,b, a); 