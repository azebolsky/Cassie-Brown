const express = require("express");
// const router = express.Router();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("welcome to cassies page");
});

app.post("/api/v1", (req, res) => {
  const data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 3001,
    auth: {
      user: "zebolsky.adam@gmail.com",
      pass: "Fishpaste9(",
    },
  });

  var mailOptions = {
    from: data.email,
    to: "zebolsky.adam@gmail.com",
    message: "ENTER_YOUR_SUBJECT",
    html: `<p>${data.firstName}</p>
            <p>${data.lastName}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});
