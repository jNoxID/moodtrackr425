const express = require('express');
const router = express.Router();
const { getMoods, postMood } = require('../controllers/moodsController');

router.get('/', getMoods);
router.post('/', postMood);

module.exports = router;
