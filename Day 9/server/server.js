import express from "express";
import cors from "cors";
import departmentRoutes from "./routes/departmentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", departmentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});