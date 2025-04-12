const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env' });
const donateRoutes = require('./routes/donate');
const path = require('path');

// Serve static files

// Load .env
dotenv.config({ path: '../.env' });

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/donate', donateRoutes);

// Connect to MongoDB (Updated syntax)

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB");

        // Start Express server
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error(" Error connecting to MongoDB:", error);
    }
}

// Call the async function
startServer();