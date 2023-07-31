const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 8080;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Akesh@mysql1",
  database: "osmosislearn",
});

app.get("/all_users", (req, res) => {
  const q = "SELECT * FROM osmosislearn.users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/all_assets", (req, res) => {
  const q = "SELECT * FROM osmosislearn.assets";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create_user", (req, res) => {
  const q = "INSERT INTO users (`username`, `email`, `password`) VALUES(?)";
  const values = [req.body.username, req.body.email, req.body.password];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("user created successfully");
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const findQuery = "SELECT * FROM  users WHERE username = ?";
  db.query(findQuery, username, (err, result) => {
    const user = result[0];
    if (user.password === password)
      return res.status(200).json({ message: "login successful" });
  });
});

const start = async () => {
  try {
    await db.connect((err) => {
      if (err) {
        console.error("Error connecting to database:", err);
      } else {
        console.log("Connected to the database.");
      }
    });
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
