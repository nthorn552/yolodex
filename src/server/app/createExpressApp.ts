import express from "express";
import bodyParser from "body-parser";
// const expressWinston = require('express-winston');

const router = require("./routes/createRouter.js")();

module.exports = () =>
  express()
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use("/api", router);
