const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
    port: 3307 // New port number
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to database.");
});

// Route to get all employees
app.get("/", (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Error executing query", details: err.message });
        }
        return res.json(data);
    });
});

// Route to create a new employee
app.post('/create', (req, res) => {
    const sql = "INSERT INTO employee (Name, Office, Email) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.office,
        req.body.email
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Error executing query", details: err.message });
        }
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE employee SET Name = ?, Office = ?, Email = ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.office,
        req.body.email
    ];

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Error executing query", details: err.message });
        }
        return res.json(data);
    });
});

app.delete('/employee/:id', (req, res) => {
    const sql = "DELETE FROM employee WHERE ID = ?";
    
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ error: "Error executing query", details: err.message });
        }
        return res.json(data);
    });
});



// Start the server
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});

