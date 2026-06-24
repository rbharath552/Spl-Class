import express from "express";

const router = express.Router();

router.get("/departments", (req, res) => {
  res.status(200).json({
    departments: ["HR", "Developer", "Tester", "Manager"],
  });
});

export default router;