const firstSuccessfulResult = require('./First_Promise')
const apiEndpoints = [
    "https://www.google.com/",
  ];
  
  async function getWeather(apiEndpoints) {
    const resultArr = []
    for (let i = 0; i < apiEndpoints.length; i++) {
        const result = new Promise( async (resolve, reject) =>{
            try {
                const response = fetch(apiEndpoints[i]);
                if ((await response).status === 'ok'){
                    resolve((await response).json())
                }
            } catch (error) {
                reject(error)
            }
        })

        resultArr.push(result)
    }
    const firstSuccessfulResult = await Promise.race(resultArr);

    // If there is a successful result, return it; otherwise, reject with an error
    if (firstSuccessfulResult) {
      return firstSuccessfulResult;
    } else {
      throw new Error("All API requests failed");
    }
  }
  
  // Example usage:
  getWeather(apiEndpoints)
    .then((weatherData) => console.log("Weather Data:", weatherData))
    .catch((error) => console.error("Error fetching weather:", error));
  