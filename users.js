const router = require("express").Router();
module.exports=router;

router.get("/",(req,res)=>{
res.send("hey its user route");
})
