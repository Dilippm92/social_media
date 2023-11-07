import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//Routes
 import AuthRoute from './Routes/AuthRoute.js'
 import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from "./Routes/ChatRoute.js"
import MessageRoute from './Routes/Messageroute.js'
const app=express();
//to get iamge
app.use(express.static('public'));
app.use('/images',express.static("images"));
//MIddleware
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

// server connection
app.listen(5000, () => {
  console.log(`Connected to localhost port ${5000}`);
});

/** mongodb connect */
mongoose
  .connect('mongodb://127.0.0.1:27017/socialmedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

//usage of routes

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post', PostRoute)
app.use('/upload',UploadRoute)
app.use("/chat",ChatRoute)
app.use("/message",MessageRoute)