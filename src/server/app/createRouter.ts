import * as express from "express";
const router = express.Router();

import deviceRoutes from "./devices/routes";

router.use("/devices", deviceRoutes);
