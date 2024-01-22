class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      function traverse(currNode) {
        array.push(currNode.name)
        if(currNode.children.length) {
          currNode.children.forEach((node) => traverse(node))
        }
      }
      traverse(this)
      return array
    }
  }