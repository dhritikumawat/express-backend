const express = require("express");
// const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

const port = 5001 || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`I am in express project ${port}`);
});

app.use(errorHandler);
