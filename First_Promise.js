async function firstSuccessfulPromise(promiseArray) {
    for (let i = 0; i < promiseArray.length; i++) {
        try{
            const result = await promiseArray[i];
            return result;
        } catch {

        }
    }
    return undefined
}
  
  let promise = firstSuccessfulPromise([new Promise((resolve, reject) => reject()), 
                new Promise((resolve, reject) => resolve("Success!"))]);
  promise.then(result => console.log(result));
  
  module.exports.firstSuccessfulPromise = firstSuccessfulPromise;