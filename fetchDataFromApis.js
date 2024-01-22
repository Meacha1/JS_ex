function fetchDataFromApis(apiUrls) {
    const promiseArr = []
    for (let i = 0; i < apiUrls.length; i++) {
        const promise = new Promise((resolve, reject) => {
                fetch(apiUrls[i])
                .then((result) => {
                    if (result.ok) {
                        resolve(result.json())
                    } else {
                        throw new Error("API request failed");
                    }
                })
                .catch((error) =>{
                    reject(error)
                })

        })
        promiseArr.push(promise)
    }
    return Promise.race(promiseArr);
  }
  
  // Example usage:
  const apiUrls = [
    'https://api1.example.com/data',
    'https://api2.example.com/data',
    'https://api3.example.com/data',
  ];
  
  fetchDataFromApis(apiUrls)
    .then((data) => console.log('Data received:', data))
    .catch((error) => console.error('Error:', error));
  