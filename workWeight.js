function workWeight(s,n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let digit = '';
    for (let i = 0; i < s.length; i++) {
        digit += alphabet.indexOf(s[i]) + 1;
    }

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < digit.length; j++) {
            sum += Number(digit[j]);
        }
        digit = sum.toString();
        console.log(digit); 
    }
    console.log(digit);    
}

workWeight('turing', 2);
