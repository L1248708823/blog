function Animal() {
  this.foods = ['肉', '草']
}

Animal.prototype.getFoods = function() {
  return this.foods
}

function Dog(){}
Dog.prototype = new Animal()
const dog1 = new Dog()
dog1.foods.push('狗粮')
console.log(dog1.getFoods());
const dog2 = new Dog()
console.log(dog2.getFoods());
/**
 * 原型链继承存在的问题：

问题1：原型中包含的引用类型属性将被所有实例共享；
问题2：子类在实例化的时候不能给父类构造函数传参；
 */