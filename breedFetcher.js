const needle = require("needle");

const fetchBreedDescription = function(breedName, callback) {

  needle.get("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, {json: true}, (err, res) => {
    if (err) {
      return console.log(err);
    }
    if (!err && res.statusCode == 200) {
      let respBody = res.body;
      if (respBody.length > 0) {
        callback(err,respBody[0]["description"]);
      } else {
        callback(err,null);
      } 
    } 
  }
  );
};
  
module.exports = { fetchBreedDescription };