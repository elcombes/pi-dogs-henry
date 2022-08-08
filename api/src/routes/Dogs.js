const { Router } = require("express");

const { getAll, postDog, getId } = require('../controllers/DogsController')

const router = Router();

//GET

router.get('/', getAll);
router.get('/:id', getId)


//POST

router.post('/', postDog);

module.exports = router;
