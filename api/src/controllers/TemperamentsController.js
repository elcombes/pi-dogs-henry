const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../db");

const getTemperaments = async (req, res, next) => {
  try {
    const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const temperamentEach = temperamentsApi.data.map(el => {
      for (let i = 0; i < el.length; i++) return el[i]
    });
    temperamentEach.forEach((el) => {
      Temperament.findOrCreate({
        where: { name: el },
      });
    });
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getTemperaments,
};
