import * as AWS from "aws-sdk";

export const uploadToS3 = async (file, userId, folderName) => {
  AWS.config.update({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
  });
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${userId}/${folderName}/${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "nomadcoffee",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};