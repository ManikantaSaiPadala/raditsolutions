const express = require('express');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL database connection pool
const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'crud',
    port: process.env.DB_PORT || 3307,
});

// Function to handle database queries with error handling
function queryDatabase(sql, values, callback) {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting database connection:', err);
            callback(err, null);
            return;
        }
        connection.query(sql, values, (err, results) => {
            connection.release();
            if (err) {
                console.error('Error executing query:', err);
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    });
}

// Route to get all employees
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM employee';
    queryDatabase(sql, [], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error executing query', details: err.message });
        }
        return res.json(data);
    });
});

// Route to create a new employee
app.post('/create', (req, res) => {
    const sql = 'INSERT INTO employee (Name, Office, Email) VALUES (?, ?, ?)';
    const values = [req.body.name, req.body.office, req.body.email];
    queryDatabase(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error executing query', details: err.message });
        }
        return res.json(data);
    });
});

// Route to update an employee
app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE employee SET Name = ?, Office = ?, Email = ? WHERE ID = ?';
    const values = [req.body.name, req.body.office, req.body.email, req.params.id];
    queryDatabase(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error executing query', details: err.message });
        }
        return res.json(data);
    });
});

// Route to delete an employee
app.delete('/employee/:id', (req, res) => {
    const sql = 'DELETE FROM employee WHERE ID = ?';
    queryDatabase(sql, [req.params.id], (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error executing query', details: err.message });
        }
        return res.json(data);
    });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


