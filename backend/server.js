const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");
const userRoute = require('./routes/userRoute')

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["https://main--leaderboard-frontend.netlify.app"],
    credentials:true,
  })
);



//Routes Middleware
app.use("/api/users/", userRoute);

//Error Middleware
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

//Connect to DB ans start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
