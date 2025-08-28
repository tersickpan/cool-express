const cloudinary = require("../config/cloudinary");

// Server-side function used to sign an upload with a couple of
// example eager transformations included in the request.
const signuploadform = ({ folder, entryKey }) => {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      asset_folder: folder,
      public_id: entryKey,
    },
    process.env.CLOUDINARY_API_SECRET
  );

  return { timestamp, signature };
};

module.exports = {
  signuploadform,
};
