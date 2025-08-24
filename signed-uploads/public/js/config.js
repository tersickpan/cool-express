require("dotenv").config();

const cloudinary = require("cloudinary").v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

exports.myconfig = myconfig;
