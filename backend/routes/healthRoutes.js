import express from "express";

const router = express.Router();

// router.get("/api/health", (req, res) => {
router.get("/", (req, res) => {
  res.json({
    msg: `Welcome to NetNinja's MERN backend ! \n Everything looks good so far ...`,
  });
});

export default router;
