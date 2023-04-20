const express = require ('express');
const mainController = require ('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/create', mainController.formCreate);
router.post('/create', mainController.storeAnime);

module.exports = router;