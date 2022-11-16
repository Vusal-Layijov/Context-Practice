function bindToAnArg(func, arg) {
  // Your code here
  let binded = func.bind(func, arg)
  console.log(binded)
  return binded
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;