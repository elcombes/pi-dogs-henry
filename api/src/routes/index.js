const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Dogs = require ('./Dogs.js')
const Temperaments = require ('./Temperaments.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', Dogs)
router.use('/temperaments', Temperaments)

module.exports = router;
