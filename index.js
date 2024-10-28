const { fetchBreedDescription } = require('./breedFetcher');

const breeds = {
  'Siberian': 'sib',
  'Abyssinian': 'beng',
};
let breedID = process.argv[2];
let breedName = breeds[breedID];

if (breedID) {
  fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });
} else {
  console.log('No breed name provided');
}


