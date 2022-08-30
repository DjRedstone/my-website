// ----- VARIABLES -----
const express = require('express');
const app = express();
const server = require("http").createServer(app);
const path = require('path');

const nodemailer = require("nodemailer");
const bp = require("body-parser");

const userMail = "baptistemay@hotmail.fr";
require("dotenv").config();
const password = process.env['EMAIL-PASSWORD'];
if (password == undefined) throw "Need Password";

// ----- PAGES -----
app.get("/", function(req, res) {
  res.redirect("./home");
});

app.get('/home/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/home/index.html'));
});
app.get("/home/style.css", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/home/style.css"));
});

app.get('/about-me/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/about-me/index.html'));
});
app.get("/about-me/style.css", (req, res) => {
	res.sendFile(path.join(__dirname, "public/about-me/style.css"));
});
app.get("/about-me/client.js", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about-me/client.js"));
});
app.get("/about-me/data.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about-me/data.json"));
});

app.get('/portfolio/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/portfolio/index.html'));
});
app.get("/portfolio/style.css", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/portfolio/style.css"));
});
app.get("/portfolio/client.js", (req, res) => {
	res.sendFile(path.join(__dirname, "public/portfolio/client.js"));
});
app.get("/portfolio/data.json", (req, res) => {
	res.sendFile(path.join(__dirname, "public/portfolio/data.json"));
});

app.get('/contact/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/contact/index.html'));
});
app.get("/contact/style.css", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/contact/style.css"));
});
app.get("/contact/client.js", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/contact/client.js"));
});

// ----- GLOBAL FILES -----
app.get("/public/header.html", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/header.html"));
});
app.get("/public/footer.html", function(req, res) {
	res.sendFile(path.join(__dirname, "./public/footer.html"));
});
app.get("/public/global-style.css", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/global-style.css"));
});
app.get("/public/font.otf", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/LEMONMILK-Medium.otf"));
});

// ----- E-MAIL -----
app.use(bp.json());

app.post("/sendMail/", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: userMail,
      pass: password
    }
  });
	
  const mailOptions = {
    from: userMail,
    to: userMail,
    subject: `[Site web] ${req.body.name} - ${req.body.subject}`,
    text: req.body.message
  }
	
  transporter.sendMail(mailOptions, (e, info) => {
    if (e) {
      console.log(e);
      res.send("error");
    } else
      res.send("success");
  })
})


// ----- START -----
server.listen(3000, function() {
  console.log("App server is running on port 3000");
});