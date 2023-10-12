const express = require("express");
const app = express();
const cors = require("cors"); // Add CORS module
require("dotenv").config();
const weatherRoutes = require("./routes/weatherRoutes");

app.use(cors()); // Enable CORS
app.use("/weather", weatherRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening at the port: ${port}`);
});
