const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

router.get('/', pollController.getPoll);
router.post('/vote', pollController.vote);

module.exports = router;
