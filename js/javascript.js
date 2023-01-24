const API = `https://jsonplaceholder.typicode.com/comments`
fetch(API)
    .then(response =>  response.json())
    .then(json => console.table(json))
