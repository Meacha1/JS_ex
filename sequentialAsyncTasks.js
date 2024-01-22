function sequentialAsyncTasks(taskArray) {
    const promiseArr = [];

    for (let i = 0; i < taskArray.length; i++) {
        const promise = new Promise((res, rej) =>{
            taskArray[i]()
            .then((result) =>{
                res(result)
            })
            .catch((error) =>{
                rej(error)
            })
        })
        promiseArr.push(promise)
    }

    return Promise.all(promiseArr);
  }
  
  // Example usage:
  const asyncTask1 = () => new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
  const asyncTask2 = () => new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500));
  const asyncTask3 = () => new Promise((resolve) => setTimeout(() => resolve("Task 3"), 800));
  
  sequentialAsyncTasks([asyncTask1, asyncTask2, asyncTask3])
    .then((results) => console.log("Results:", results))
    .catch((error) => console.error("Error:", error));
  