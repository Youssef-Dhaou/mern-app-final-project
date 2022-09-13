const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'sticompany',
  api_key: '455518982992861',
  api_secret: '85dciL6UpW6_PHP3UsW5a-zUk0Y',
});

module.exports = cloudinary;