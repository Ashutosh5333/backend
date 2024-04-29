

const express = require("express")
const {RegisterUserinfo, DeleteUserData, Getuserdata} = require("../controller/user.controller");
const { TestUserinfo, Getuserpostdata, GetUserById, UpdateUserInfo, DeleteTestUserData } = require("../controller/Test.controller");

const userRouter = express.Router();

userRouter.post('/message', RegisterUserinfo);
userRouter.delete("/delete/:id",DeleteUserData );

userRouter.get("/getdata",Getuserdata)

//  Test

userRouter.post("/postdata",TestUserinfo)

userRouter.get("/getpost",Getuserpostdata)

userRouter.get("/getpost/:id",GetUserById)

userRouter.patch("/getpost/update/:id",UpdateUserInfo)

userRouter.delete("/getpost/delete/:id",DeleteTestUserData );

module.exports={userRouter};
