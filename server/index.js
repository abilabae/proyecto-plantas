const express = require("express");
require("dotenv").config()
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`Servidor correcto en el puerto ${PORT}`);
});

module.exports=app
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`Servidor correcto en el puerto ${PORT}`);
});