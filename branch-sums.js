function branchSums(root) {
    // Write your code here.
    let final = []
    let result = []
    let sum = 0
    
    function traverse(curNode) {
      sum += curNode.value
      if(curNode.left) traverse(curNode.left)
      if(curNode.right) traverse(curNode.right)
      result.push(sum)
      sum -= curNode.value
    } 
    traverse(root)
    final.push(sumArr(result[0]))
    for (let i = 1; i < result.length; i++) {
      if(result[i].length >= result[i - 1].length){
        final.push(sumArr(result[i]))
      }
    }
    return final
  }
  
  function sumArr(arr) {
    let sum = 0
    arr.forEach((el) => sum += el)
    return sum
  }