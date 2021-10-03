const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3001;

const csvProcessRoutes = require("./routes/csvProcess")
const loginRoutes = require("./routes/login")

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/api/v1/csv-process", csvProcessRoutes);
app.use("/api/v1/login", loginRoutes);

app.listen(port, () => console.log(`App started on port ${port}`))