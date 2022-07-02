const axios = require('axios').default;

console.log('Hola mundo');

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const URL = 'https://swapi.dev/api/people/'

axios.get(URL)
     .then( res => {
        //  console.log(res.data);
        res.data.results.forEach(element => {
            console.log(element.name);
        });
     })