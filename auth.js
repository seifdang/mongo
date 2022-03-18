const router = require("express").Router();
const User = require("../models/Users");
 //REGISTER

router.get("/register", async (req,res)=>{
const users = new User ({
    username:"john",
    email:"john@gmail.com",
    password:"123456",
})

await users.save();
res.send("ok")
});
module.exports=router;


