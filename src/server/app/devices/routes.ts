import express from "express";
const router = express.Router();

export default router.get("/", getDevice);

function getDevice(req: express.Request, res: express.Response) {
  console.log(req);
}
