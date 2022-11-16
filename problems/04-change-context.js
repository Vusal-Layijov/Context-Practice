function changeContext(func, obj) {
  // Your code here
  let result = func.bind(obj)()
  return result
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;