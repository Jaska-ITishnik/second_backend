const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1',
    database: 'mysql_exam_db'
});

app.post('/products', (req, res) => {
    const { name, price, description } = req.body;
    db.query("INSERT INTO apps_product (name, price, description) VALUES (?, ?, ?)",
        [name, price, description], (err) => {
            if (err) throw err;

            axios.post("http://localhost:5000/products", req.body)
                .then(() => res.json({ status: "n2 dan java backendga borishi kerak edi afsuski" }))
                .catch(err => res.status(500).json({ error: "java jo'q" }));
        });
});

app.listen(3000, () => console.log("N2 (Node.js) 3000 portda ishlavotti"));
