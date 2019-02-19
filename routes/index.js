const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

// router.post(`/nugu`, nugu);
router.post(`/nugu/SoundPlayAction`, nugu);

module.exports = router;
