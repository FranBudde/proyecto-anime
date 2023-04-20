const animeControllers = require('../../controllers/api/animesAPIcontroller');
const express = require('express');
const router = express.Router();


router.get('/animes', animeControllers.list);

module.exports = router;
