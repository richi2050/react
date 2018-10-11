var request = require("request");

let data = request("https://swapi.co/api/people",{ json: true }, function(error, response, body) {
    body.results.map(data => {
      console.log('----------------- Inicio -----------------------');
        console.log(data);
      console.log('---------------- Fin --------------------------');
    });
    return body;
  });
