const express = require("express");
const cors = require("cors");
require("./connection/mongodb");
const router = require("./router/router");
const app = express();
require("./socket/socket")
require("dotenv").config();


app.use(express.json());
app.use(cors());
app.use(router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});