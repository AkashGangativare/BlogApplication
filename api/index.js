const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const cors = require("cors");

// const authRoute = "./routes/auth"

dotenv.config();
app.use(express.json())
app.use(cors());
app.use("/images", express.static(path.join(__dirname,"/images")))
mongoose.connect(process.env.MongoDB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.log(error);
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use("/api/auth", require("./routes/auth"))
app.use("/api/users", require("./routes/users"))
app.use("/api/posts", require("./routes/posts"))
app.use("/api/categories", require("./routes/categories"))
app.listen("5000", ()=>{
    console.log("backend is running");
});

