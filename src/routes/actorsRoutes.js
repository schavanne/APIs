const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.detail);
router.post('/create', actorsController.create);
router.delete('/delete/:id', actorsController.destroy);

module.exports = router;