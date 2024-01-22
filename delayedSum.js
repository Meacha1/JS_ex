function delayedSum(a, b, delay) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(a + b)            
        }, delay);
    })
}

delayedSum(3, 7, 2000)
  .then((result) => console.log("Result:", result)) // Should print "Result: 10" after 2 seconds
  .catch((error) => console.error("Error:", error));