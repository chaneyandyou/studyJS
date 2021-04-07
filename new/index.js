function myNew() {
  let obj = {}

  const constructFn = [].shift.call(arguments)
  obj.__proto__ = constructFn.prototype

  const res = constructFn.apply(obj, arguments)
  return typeof res === 'object' ? res : obj
}