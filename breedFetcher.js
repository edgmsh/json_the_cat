const needle = require("needle");

let inArg = process.argv[2];
if (inArg) {
  const breeds = {
    'Siberian': 'sib',
    'Abyssinian': 'beng',
  };

  needle.get("https://api.thecatapi.com/v1/breeds/search?q=" + breeds[inArg], {json: true}, (err, res) => {
    if (err) {
      return console.log(err);
    }
    let todo = res.body;
    console.log(todo);
  }
  );
} else {
  console.log('No breed name provided');
}
