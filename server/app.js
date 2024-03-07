const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const apiRouter = require("./routers/apiRouter.js");

const app = express();

// App Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", apiRouter);

module.exports = app;
