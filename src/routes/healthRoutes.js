const express = require("express");
const { query } = require("../db");

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    await query("SELECT 1");
    res.status(200).json({ status: "ok", service: "cloud-native-webapp" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
