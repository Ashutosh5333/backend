
const S3 = require("aws-sdk/clients/s3");
const { randomUUID } = require("crypto");


require("dotenv").config();
const { ACCESS_KEY, SECRET_KEY, BUCKET_NAME, REGION } = process.env;

//  console.log("key",ACCESS_KEY, SECRET_KEY, BUCKET_NAME, REGION)



 const GetpreUrlpost = async  (req,res) =>{
    try {
        if (
          !process.env.ACCESS_KEY ||
          !process.env.SECRET_KEY ||
          !process.env.REGION
        ) {
          throw {
            message: "AWS credential is missing",
            statusCode: 500,
          };
        }
    
        const s3 = new S3({
          apiVersion: "2006-03-01",
          accessKeyId: process.env.ACCESS_KEY,
          secretAccessKey: process.env.SECRET_KEY,
          region: process.env.REGION,
          signatureVersion: "v4",
        });
    
        const { fileType } = req.body;
        const ex = fileType.split(".")[1];
        const Key = `user/ashutosh/${randomUUID()}.${ex}`;
    
        const s3Params = {
          Bucket: process.env.BUCKET_NAME,
          Key,
          Expires: 600,
          ContentType: `image/${ex}`,
        };
    
        const uploadUrl = await s3.getSignedUrl("putObject", s3Params);
    
        res.status(200).json({
          uploadUrl,
          key: Key,
        });
      } catch (error) {
        res.status(500).json({
          error: error.message,
        });
      }
 }



 const deleteurl = async (req,res) =>{
    try {
        const key = req.query.key || "";
        const deleteParams = {
          Bucket: BUCKET_NAME,
          Key: key,
        };
    
        if(!key){
            throw {
                message:"Provide the key",
                statusCode:400
            }
        }
        await s3.deleteObject(deleteParams).promise();
    
        res.status(200).json({
          message: "Object deleted successfully",
        });
      } catch (error) {
        res.status(500).json({
          error: error.message,
        });
      }


 }




module.exports={GetpreUrlpost,deleteurl}