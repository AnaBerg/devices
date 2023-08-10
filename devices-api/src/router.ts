import express from "express";

import {
  create,
  deleteByMacAddress,
  findByMacAddress,
  list,
} from "./controllers/devices";

const router = express.Router();

router.post("/v1/device", create);
router.delete("/v1/device", deleteByMacAddress);
router.get("/v1/device", findByMacAddress);
router.get("/v1/devices", list);

export default router;
