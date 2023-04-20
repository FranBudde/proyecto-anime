const express = require ('express');
const userController = require ('../../controllers/api/userApiController');

const router = express.Router();

router.get('/login', userController.login);

module.exports = router;