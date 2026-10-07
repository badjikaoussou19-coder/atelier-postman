const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config({
    path: "./config/.env"
});

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connecté");    
    });

    app.listen(3000, () => {
            console.log("Serveur démarré sur le port 3000");
    });