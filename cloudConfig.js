// Import necessary packages
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Cloudinary cloud name from environment variable
    api_key: process.env.CLOUD_API_KEY, // Cloudinary API key from environment variable
    api_secret: process.env.CLOUD_API_SECRET, // Cloudinary API secret from environment variable
});
// Cloudinary storage configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_DEV", // Folder name where files will be stored in Cloudinary
        allowed_formats: ["png", "jpg", "jpeg"], // Allowed file formats
    },
});

// Exporting the configured cloudinary and storage
module.exports = {
    cloudinary,
    storage,
};
