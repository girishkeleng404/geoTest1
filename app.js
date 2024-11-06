const express = require("express");
const env = require("dotenv");
const authRoute = require("./routes/authRoute");
const countryRoute = require("./routes/countryRoute");
const globleErrorHandler = require("./controllers/errorController");

const app = express();
env.config();
const port = process.env.APP_PORT;

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.use("/api/v1/auth", authRoute);

app.use("/api/v1/country", countryRoute);

const { sequelize } = require("./models");
sequelize
  .sync({ force: false }) // Set force: true to drop and recreate tables, but careful with data loss.
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

app.use(globleErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
