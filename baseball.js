function baseball(arr) {
    const NewArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
            const Element = Number(NewArr[NewArr.length - 1]) + Number(NewArr[NewArr.length - 2]);
            NewArr.push(Element);
        } else if(arr[i] === 'D') {
            const Element = Number(NewArr[NewArr.length - 1]) * 2
            NewArr.push(Element);
        } else if(arr[i] === 'C'){
            NewArr.pop();
        } else {
            NewArr.push(Number(arr[i]))
        }
    }
    let sum = 0;
    for (let index = 0; index < NewArr.length; index++) {
        sum += NewArr[index]
    }
    console.log(sum)
}


baseball(['5', '2', 'C', 'D', '+']); // 30
baseball(['5', '-2', '4', 'C', 'D', '9', '+', '+']); // 27
baseball(['1']); // 1