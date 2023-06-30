const express = require("express");
const cors = require('cors');

const connection = require('./connection/DBConnection');
const router = require('./routes/route');

const app = express();

const corsConfig = {
    origin: true,
    credentials: true,
};

app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }))
connection();

app.use('/api/', router);



app.listen(8080, () => {
    console.log("Server is running on port 8080");
})