const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'BeyondStay_DEV',
      format: async (req, file) => {
        
        if (file.mimetype === 'image/png') {
          return 'png';
        } else if (file.mimetype === 'image/jpeg') {
          return 'jpeg';
        } else if (file.mimetype === 'image/jpg') {
          return 'jpg';
        } else {
          
          return 'jpg';
        }
      }
    },
  });


module.exports = {
    cloudinary,
    storage
};