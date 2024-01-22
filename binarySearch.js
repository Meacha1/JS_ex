function findClosestValueInBst(tree, target) {
let curNode = tree;
let queue = [];
let result = [];
let diff = +Infinity;

queue.push(curNode);

while (queue.length) {
    curNode = queue.shift()
    result.push(curNode.value)
    let curDiff = curNode.value - target
    if (Math.abs(curDiff) <= Math.abs(diff)) diff = curDiff
    if (curNode.left) queue.push(curNode.left)
    if (curNode.right) queue.push(curNode.right)     
}

return (diff + target)

}
