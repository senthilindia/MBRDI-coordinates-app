const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/coordinates", (req, res) => {
  const { x, y } = req.body;
  console.log(`Coordinates: x=${x}, y=${y}`);
  res.json({ message: "Received!", x, y });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
