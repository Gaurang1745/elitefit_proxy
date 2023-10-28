const express = require("express");
const axios = require("axios");
const app = express();
const port = 3080;

app.get("/api/testimonials", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const response = await axios.get(
      "https://elitefit4you.com/test-api/testimonials.json"
    );
    console.log(response.data["testimonials"]);
    res.json(response.data["testimonials"]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
