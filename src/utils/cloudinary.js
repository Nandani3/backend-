import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET'
});

const uploadToCloudinary = async(filePath) => {
    try {
        if(!filePath) return null;
        //upload to clodinary
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        })
        console.log("file uploaded to cloudinary" , result.url);
        return result.url;
    }
    catch (error) {
        fs.unlinkSync(filePath)
        return null;
    }

}
export {uplooadToCloudinary}