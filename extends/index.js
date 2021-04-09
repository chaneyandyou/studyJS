// 组合寄生式继承
function clone(parent, child) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}

function Parent() {
  this.name = 'parent'
  this.arr = [1,2,3]
}

function Child() {
  Parent.call(this)
  this.type = 'child'
}

clone(Parent, Child) 