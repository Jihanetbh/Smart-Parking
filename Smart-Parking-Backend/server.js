const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const mysql = require("mysql");

// Create connection to MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "dementor",
  password: "letmein",
  database: "smart-parking",
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Configure passport
passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("username:", username);
    console.log("password:", password);
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    console.log(query);
    connection.query(query, (err, results) => {
      if (err) {
        console.log("Error querying MySQL database:", err);
        console.log("Query:", query);
        return done(err);
      }
      if (results.length === 0) {
        return done(null, false, { message: "Invalid username or password" });
      }
      return done(null, results[0]);
    });
  })
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "secret",
    },
    (jwtPayload, done) => {
      const query = `SELECT * FROM users WHERE id = '${jwtPayload.id}'`;
      connection.query(query, (err, results) => {
        if (err) {
          console.log("Error querying MySQL database:", err);
          console.log("Query:", query);
          return done(err, false);
        }
        if (results.length === 0) {
          return done(null, false);
        }
        return done(null, results[0]);
      });
    }
  )
);

// Create Express app
const app = express();

// Configure middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Define API endpoints
app.post("/login", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) {
      console.log("Error authenticating user:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    if (!user) {
      res.status(401).json({ error: info.message });
      return;
    }
    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res.status(200).json({ token });
  })(req, res);
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const query = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
  connection.query(query, (err, results) => {
    if (err) {
      console.log("Error inserting user into MySQL database:", err);
      console.log("Query:", query);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(200).json({ message: "User registration successful" });
  });
});

// Define API endpoint to retrieve user information
app.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const user = req.user;
    res.status(200).json({ user });
  }
);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Close the MySQL connection when the Node.js process is terminated
process.on("SIGINT", () => {
  connection.end();
  process.exit();
});

// Export the app object
module.exports = app;
