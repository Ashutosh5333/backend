const express = require("express")
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const { AwsRouter } = require("./routes/aws.routes");

const app = express()
app.use(express.json());

app.use(
  cors({
    origin: "*"
  })
);

app.get("/", (req, res) => {
  res.send("Hello welcome");
});

app.use("/user", userRouter);
app.use(AwsRouter)


module.exports=app;



