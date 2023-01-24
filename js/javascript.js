const API = `https://json/placeholder.typicode.com/comments`
fetch(API)
    .then(response =>  response.json())
    .then(json => console.table(json))
