// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    return helper(tree, min = -Infinity, max = +Infinity)
    
  }
  
  function helper(tree, min, max) {
    if(!tree){
      return true
    }
    if (tree.value < min || tree.value >= max) {
      return false
    }
    let validateLeft = helper(tree.left, min, tree.value)
    let validateRight = helper(tree.right, tree.value, max)
    return validateLeft && validateRight
  }