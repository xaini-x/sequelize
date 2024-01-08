const {addUser,updateUser,findUser,findAll} = require("../contollers/userControllers");
const express = require("express");
const router = express.Router();
router.get("/add", addUser);
router.post("/update/:fName", updateUser);
router.get('/findUser/:nameSearch', findUser);
router.get('/all/:nameSearch', findAll);
module.exports = router;