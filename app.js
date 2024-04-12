const genders = "боевик"
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'D0P33B2-QGT4Z7E-M4418SE-Z780YE3'}
  };

fetch(`https://api.kinopoisk.dev/v1.4/movie?year=2024&genres.name=${genders}`, options)
    .then(respons => respons.json())
    .then(answer => {
        console.log(answer);
    })