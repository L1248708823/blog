const a = [1,2,1,222,2,3]
// ES6
const  filter = function (arr) {
  const newArr= [...new Set(arr)]
  console.log(newArr);
  return newArr
}

filter(a)

// ES5
const filter5 = function(arr) {
  const result = arr.filter((el,index)=>{
    return arr.indexOf(el) === index
  })
  return result
}

console.log(filter5(a)); 