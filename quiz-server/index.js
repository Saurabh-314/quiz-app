require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth");
const adminAuthRoute = require("./routes/adminAuthRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", authRoute);
app.use("/api/admin", adminAuthRoute);

// const DATABASE_URL = "mongodb+srv://saurabh-314:9@XmgUD2BnKk!7B@cluster0.jfrinjg.mongodb.net/quiz"
const DATABASE_URL = "mongodb+srv://saurabh-314:9%40XmgUD2BnKk%217B@cluster0.jfrinjg.mongodb.net/quiz?retryWrites=true&w=majority"


// const PORT = 5000 || process.env.PORT ; //for testing
const PORT = process.env.PORT; // for deployment
mongoose.connect(DATABASE_URL,
  {
    useNewUrlParser: true, useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log("error", err);
      return console.log('error in mongodb connection');
    }
    console.log('connect to DB');
  }
)

app.listen(PORT, () => { console.log('server running...') })