const express = require ('express');
const mainController = require ('../../controllers/api/mainApiController');

const router = express.Router();

router.get('/', mainController.index);

module.exports = router;