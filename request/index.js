var request = require("request");

let data = request("https://swapi.co/api/people",{ json: true }, function(error, response, body) {
    //console.log(body);

    //console.log(body.results);
    body.results.map(data => {
      console.log('----------------- Inicio -----------------------');
        console.log(data);
      console.log('---------------- Fin --------------------------');
    });
    return body;
  });

//*console.log(data);
