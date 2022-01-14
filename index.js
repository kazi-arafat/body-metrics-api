const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const BodyMetricsRoutes = require("./Routes/BodyMetricRoute.js");
const AuthenticationRoutes = require('./Routes/AuthenticationRoute.js');

//configure dotenv for getting environmental variable values
require("dotenv").config();
// initialize app using express
const app = express();

// declare and use middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// declare all the route
app.use("/body-metrics", BodyMetricsRoutes);
app.use("/register", AuthenticationRoutes);

// database connectivity and start app server
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on ${PORT} prot.`))
  )
  .catch((error) => console.log(error.message));
// mongoose.set("useFindAndModify", false);
