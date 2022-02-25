const getParams = {
    getParams(title) {
        let promise = new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', `https://afternoon-mesa-71443.herokuapp.com/${title}`)
            xhr.responseType = 'json'
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send()

            xhr.onload = function () {
                if (xhr.status != 200) { 
                    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
                } else { 
                    resolve(xhr.response)
                }
            }

            xhr.onerror = function () {
                alert("Запрос не удался");
            };
        })
        return promise.then()
    }
}
export {
    getParams
}