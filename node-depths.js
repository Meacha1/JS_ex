function nodeDepths(root) {
    // Write your code here.
    let sum = 0;
    let depth = 0;
    function traverse(currNode) {
      if (currNode.left) {
        depth += 1
        traverse(currNode.left)
      }
      if (currNode.right) {
        depth += 1
        traverse(currNode.right)
      }
      sum += depth
      depth -= 1
    }
    traverse(root)
    return sum
  }