const express = require('express');
const router = express.Router();
const Food = require('../db/models');
const axios = require('axios');

router.post('/donate', async (req, res) => {
    const { donor, foodImage, expiryImage } = req.body;

    // AI Modules Integration
    const qualityRes = await axios.post('http://localhost:5001/quality', { image: foodImage });
    const expiryRes = await axios.post('http://localhost:5001/expiry', { image: expiryImage });

    const food = new Food({
        donor,
        quality: qualityRes.data.quality,
        expiry: expiryRes.data.expiry
    });
    await food.save();
    res.send({ success: true, food });
});

module.exports = router;
