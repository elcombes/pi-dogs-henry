const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const apiInfo = await apiUrl.data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      temperament: el.temperament,
      weight: el.weight.metric,
      image: el.image.url,
    };
  });
  return apiInfo;
};

const getDbInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllDogs = async () => {
  const dbInfo = await getDbInfo();
  const apiInfo = await getApiInfo();
  const infoAll = dbInfo.concat(apiInfo);
  return infoAll;
};

// GET

const getAll = async (req, res, next) => {
  try {
    const name = req.query.name;
    let dogsTotal = await getAllDogs();
    if (name) {
      let dogsName = await dogsTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      dogsName.length
        ? res.status(200).send(dogsName)
        : res.status(404).send("No existe esa raza");
    } else {
      res.status(200).send(dogsTotal);
    }
  } catch (e) {
    next(e);
  }
};

const getId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dogsTotal = await getAllDogs();
    if (id) {
      let dogId = await dogsTotal.filter((el) => el.id == id);
      dogId.length
        ? res.status(200).json(dogId)
        : res.status(404).send("No se encuentra esa raza, intenta con otro ID");
    } else {
      res.status(200).send(dogsTotal);
    }
  } catch (e) {
    next(e);
  }
};

// POST


const postDog = async (req, res) => {
  // res.send('Hola soy el post')

  const { dogNew, temper } = req.body;

  if (dogNew) {
    try {
      let nuevo = await Dog.create(dogNew);

      let arr = []
      for (let i = 0; i < arr.length; i++) {
        arr[i] = await nuevo.addTemperament(temper[i]) // relacionando temperamentos
      }

      if (nuevo ) res.json({ message: "Nueva raza creada correctamente", data: nuevo });
      else res.json({ message: "No se puedo crear una nueva raza" });

    } catch (e) {
      res.send(e);
    }
  } else {
    res.json({ message: "No se reciben los datos del body" });
  }
};

// const postDog = async (req, res, next) => {
//   const { name, weight, height, life_span, image, temperament } = req.body;
//   await Dog.create({
//     name:"",
//     weight:"",
//     height:"",
//     life_span,
//     image,
//   })
//     .then((dogCreated) => {
//       return dogCreated.setTemperament(temperament);
//     })
//     .then((newDog) => {
//       return res.json({
//         message: "Recipe created successfully",
//       });
//     })
//     .catch((error) => next(error));
// }




module.exports = {
  getAll,
  postDog,
  getId,
};
