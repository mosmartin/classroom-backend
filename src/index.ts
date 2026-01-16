import cors from "cors";
import express from "express";

import subjectsRouter from "./routes/subjects";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse JSON bodies
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use("/api/v1/subjects", subjectsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
