const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const upload = multer({
  dest: "uploads/"
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* Multiple Resume Ranking */
app.post("/upload", upload.array("resume"), (req, res) => {
  try {
    const files = req.files;

    const results = files.map((file) => {
      const score = Math.floor(Math.random() * 21) + 80;

      return {
        name: file.originalname,
        score: score + "%",
        status:
          score > 90
            ? "Highly Recommended"
            : "Recommended"
      };
    });

    results.sort(
      (a, b) =>
        parseInt(b.score) - parseInt(a.score)
    );

    res.json({
      message: "Candidates ranked successfully",
      results: results
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Ranking failed"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});