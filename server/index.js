const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql2');
require("dotenv").config();
const nodemailer = require("nodemailer"); // Import Nodemailer


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

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other email services like Outlook, Yahoo, etc.
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// API Endpoint to Save Contact Info
app.post("/api/contact", (req, res) => {
    const { name, email, phone_number, reason_for_contact, message } = req.body;

    // Input validation
    if (!name || !email || !phone_number || !reason_for_contact || !message) {
        return res.status(400).send("All fields are required.");
    }

    // Insert query into the database
    const query = `
        INSERT INTO queries (name, email, phone_number, reason_for_contact, message)
        VALUES (?, ?, ?, ?, ?)
    `;
    db.query(query, [name, email, phone_number, reason_for_contact, message], (err) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Internal Server Error: Unable to save data.");
        }

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL, // Replace with the admin's email address
            subject: `New Query from ${name}`,
            text: `
                You have received a new query:
                
                Name: ${name}
                Email: ${email}
                Phone Number: ${phone_number}
                Reason for Contact: ${reason_for_contact}
                Message: ${message}
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).send("Query saved, but email notification failed.");
            }
            res.status(200).send("Query saved and email sent successfully.");
        });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
