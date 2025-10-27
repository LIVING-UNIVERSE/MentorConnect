// import { v2 as cloudinary } from 'cloudinary';

// const connectCloudinary = async () => {

//     cloudinary.config({
//         cloud_name: process.env.CLOUDINARY_KEY_NAME,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET
//     });

// }

// export default connectCloudinary;




import { v2 as cloudinary } from 'cloudinary';

let initialized = false;

const connectCloudinary = async () => {
  if (initialized) return;

  // If you set CLOUDINARY_URL in Vercel (recommended), cloudinary.config will pick it up.
  if (process.env.CLOUDINARY_URL) {
    cloudinary.config({ secure: true });
  } else {
    // fallback to separate env vars
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_KEY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
  }

  initialized = true;
  console.log('Cloudinary configured');
};

export default connectCloudinary;
export { cloudinary };
