const { Router } = require("express");
const axios = require("axios");
const { API_KEY } = process.env;

const router = Router();


router.get('/temperaments', async (req, res) => {
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
  });
  
  // router.get('/temperaments', async (req, res) => {
  //   const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  //     const temperaments = temperamentsApi.data.map(el => el.temperament);
  //   const temperamentEach = temperaments.map(el => {
  //     for (let i = 0; i < el.length; i++) return el[i]
  //   });
  //   temperamentEach.forEach((el) => {
  //     Temperament.findOrCreate({
  //       where: { name: el },
  //     });
  //   });
  //   const allTemperaments = await Temperament.findAll();
  //   res.send(allTemperaments);
  // });


module.exports = router;