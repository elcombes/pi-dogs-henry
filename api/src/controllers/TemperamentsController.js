const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../db");


const getOnlyTemperaments = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  let data = apiUrl.data.map((d) =>
    d.temperament ? d.temperament.split(", ") : []
  );

  let temperamentArr = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (temperamentArr.indexOf(data[i][j]) === -1) {
        temperamentArr.push(data[i][j]);
      }
    }
  }
  return temperamentArr.sort();
};

const getTemperaments = async (req, res) => {
  const data = await getOnlyTemperaments();

  data.forEach((el) => {
    Temperament.findOrCreate({
      where: { name: el },
    });
  });

  const allTemperaments = await Temperament.findAll();
  res.status(200).json(allTemperaments);
};

module.exports = {
  getTemperaments,
};
