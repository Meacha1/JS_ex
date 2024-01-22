function validParantisis(string) {
    const pair = { '{': '}', '[': ']', '(': ')'};

    let stack = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '{' || string[i] === '[' || string[i] === '(' ) {
            stack.push(string[i])
        } else if (string[i] !== pair[stack.pop()]) {
            return false;
        }
    }

    if (stack.length !== 0) {
        return false
    }

    return true;
}


console.log(validParantisis('{{{[[(())]]}}]'))