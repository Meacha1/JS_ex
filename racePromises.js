function racePromises(promiseArr) {
    const firstPromise = Promise.race(promiseArr)
    return firstPromise
}


const promise1 = new Promise((resolve) => setTimeout(() => resolve("Resolved 1"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Resolved 2"), 500));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Rejected 3"), 800));

racePromises([promise1, promise2, promise3])
  .then((result) => console.log("First Resolved Promise:", result))
  .catch((error) => console.error("First Rejected Promise:", error));
