function fetchDataWithRetry(url, retryCount){
    return new Promise((resolve, reject) => {

        function tryFetch(atempts) {
            fetch(url)
            .then((response) =>{
                if(response.ok){
                    resolve(response.json())
                } else {
                    if(atempts <= retryCount){
                        tryFetch(atempts + 1)
                    }
                    reject(`error`)
                }
            })
            .catch((error) => {
                if(atempts <= retryCount){
                    tryFetch(atempts + 1)
                }
            })
        }

        tryFetch(1);
    })
}