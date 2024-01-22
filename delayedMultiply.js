function delayedMultiply(a,b,delay) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(a*b)
        }, delay)
    })

}

delayedMultiply(4, 5, 1500)
  .then((result) => console.log("Result:", result)) // Should print "Result: 20" after 1.5 seconds
  .catch((error) => console.error("Error:", error));
