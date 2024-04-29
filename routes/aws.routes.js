

const express = require("express");
const { GetpreUrlpost, deleteurl } = require("../aws/Aws.controller");
const AwsRouter = express.Router();


AwsRouter.post('/getPresignUrl', GetpreUrlpost);

AwsRouter.delete("/delete/:id",deleteurl);

module.exports={AwsRouter};
