const pool = require("../dbconnection/db");
const crypto = require("crypto");

// Render login page
const getLoginPage = (req, res) => {
  res.render("login");
};

// Handle login form submission
const login = (req, res) => {
  const { email, password } = req.body;
  // Find user by email
  const query = "SELECT userId, password, passwordSalt FROM users WHERE emailAddress = ?";
  pool.query(query, [email], (error, results) => {
    if (error || results.length === 0) {
      // User not found or database error
      console.log(error);
      res.render("login", { error: "Invalid email or password" });
    } else {
      const user = results[0];
      const hashedPassword = crypto
        .createHash("sha256")
        .update(password + user.passwordSalt)
        .digest("hex");
      if (hashedPassword === user.password) {
        // Passwords match, create session
        req.session.isAuthenticated = true;
        req.session.user = user;
        res.redirect("/");
      } else {
        // Incorrect password
        res.render("login", { error: "Invalid email or password" });
      }
    }
  });
};

// Handle logout
const logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log("Error while destroying session:", error);
    }
    res.redirect("/login");
  });
};

const createNewUser = (firstname, lastname, emailAddress) => {
  return new Promise((res, rej) => {
      pool.query(`INSERT INTO users(firstname, lastname, emailAddress) VALUES (?, ?, ?)`, [firstname, lastname, emailAddress], (error) => {
          if (error) {
              console.error('Error occured when executing query: ', error);
              rej(error);
              return;
          }
          res(true);
      });
  });
};

module.exports = {
  getLoginPage,
  login,
  logout,
};
