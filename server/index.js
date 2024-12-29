const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql2');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "NGPS",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to the MySQL database.");
});

// API Endpoint to Save Contact Info
app.post("/api/contact", (req, res) => {
    const { name, phone_number, reason_for_contact, message } = req.body;

    // Input Validation
    if (!name || !phone_number || !reason_for_contact || !message) {
        console.error("Missing data in request:", req.body);
        return res.status(400).send("All fields are required.");
    }

    const query = `
    INSERT INTO queries (name, phone_number, reason_for_contact, message)
    VALUES (?, ?, ?, ?)
  `;

    db.query(query, [name, phone_number, reason_for_contact, message], (err, result) => {
        if (err) {
            console.error("Failed to save query:", err);
            return res.status(500).send("Failed to save query.");
        }
        res.status(200).send("Query saved successfully.");
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
