const { Router } = require("express");

const { getAll } = require('../controllers/DogsController')

const router = Router();

//GET

router.get('/', getAll);


//POST



module.exports = router;
