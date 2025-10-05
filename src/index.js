import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Route di test
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend 👋" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
