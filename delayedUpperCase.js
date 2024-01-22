function delayedUpperCase(string, delay) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(string.toUpperCase())
        }, delay);
    })
}



delayedUpperCase("hello", 2000)
  .then((result) => {
    console.log(result); // Should print "HELLO" after a 2-second delay
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
