const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../db");

let apiInfo = [
  {name: 'Stubborn'},
  {name: 'Curious'},
  {name: 'Playful'},
  {name: 'Adventurous'},
  {name: 'Active'},
  {name: 'Fun - loving'},
  {name: 'Aloof'},
  {name: 'Clownish'},
  {name: 'Dignified'},
  {name: 'Independent'},
  {name: 'Happy'},
];

const getTemperaments = async (req, res, next) => {

  // const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

  // const apiInfo = await apiUrl.data.map((el) => {
  //   return {
  //     temperament: el.temperament,
  //   };
  // });

  Temperament.findAll()
    .then((response) => {
      if (response.length > 0) {
        return res.json(response).status(200);
      } else {
        Temperament.bulkCreate(apiInfo)
          .then((response) => {
            return res.json(response);
          })
          .catch((error) => next(error));
      }
    })
    .catch((error) => next(error));
};

// const temperamentsAlone = apiInfo.split(', ')

// axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
//   .then((temperaments) => {
//     let dbTemperaments = temperaments.data.map((el) => {
//       return { id: el.id, name: el.temperament };
//     });

//     dbTemperaments.forEach((e) => {
//       Temperament.findOrCreate({ where: { id: e.id, name: e.name } });
//     });
//   })
//   .catch((e) => console.log(e));

module.exports = {
  getTemperaments,
};
