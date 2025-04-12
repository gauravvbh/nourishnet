const express = require('express');
const router = express.Router();
const Donation = require('../db/models');

// POST route to add a new donation
router.post('/', async (req, res) => {
    try {
        const { donorName, foodType, quantity, address, contact } = req.body;

        const newDonation = new Donation({
            donorName,
            foodType,
            quantity,
            address,
            contact
        });z

        const savedDonation = await newDonation.save();
        res.status(201).json({ message: 'Donation added!', data: savedDonation });

    } catch (error) {
        console.error("Error saving donation:", error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// GET route to fetch all donations
router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        console.error("Error fetching donations:", error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
