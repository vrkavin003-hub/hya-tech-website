const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/apply", (req, res) => {
  console.log("Application Received:", req.body);

  res.json({ message: "Success" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});