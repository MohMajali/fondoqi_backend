const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const hotelsRouter = require("./routes/hotels");
const roomsRouter = require("./routes/rooms");

const app = express();
app.use(express.json())

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/booking");
  } catch (error) {
    throw error;
  }
};

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/hotels", hotelsRouter);
app.use("/rooms", roomsRouter);

app.listen(5000, () => {
  connect();
  console.log("Connected");
});
