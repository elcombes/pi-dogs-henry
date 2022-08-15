const { Router } = require("express");
const { getTemperaments } = require('../controllers/TemperamentsController')
const router = Router();

//GET

router.get('/', getTemperaments);


module.exports = router;