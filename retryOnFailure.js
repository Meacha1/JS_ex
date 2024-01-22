function retryOnFailure(task, attempt) {
    const tryTask = (trial) => {
      return task(trial).catch((error) => {
        console.log(error);
        if (trial < attempt) {
          return tryTask(trial + 1); // Corrected: Pass trial + 1 for the next attempt
        } else {
          throw new Error('All attempts are failed');
        }
      });
    };
  
    return tryTask(1);
}



const mockTask = (attempt) => {
    return new Promise((resolve, reject) => {
      const randomSuccess = Math.random() < 0.8; // 80% chance of success
  
      setTimeout(() => {
        if (randomSuccess) {
          resolve(`Task succeeded on attempt ${attempt}`);
        } else {
          reject(`Task failed on attempt ${attempt}`);
        }
      }, 500);
    });
  };
  
  retryOnFailure(mockTask, 3)
    .then((result) => console.log("Result:", result))
    .catch((error) => console.error("Error:", error));
  