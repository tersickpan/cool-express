const cloudinary = require("cloudinary").v2;

cloudinary.config({
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = cloudinary;
