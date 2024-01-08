const {addUser,updateUser,findUser,findAll, exinclude, operand} = require("../contollers/userControllers");
const express = require("express");
const router = express.Router();
router.get("/add", addUser);
router.post("/update/:fName", updateUser);
router.get('/findUser/:nameSearch', findUser);
router.get('/all/:nameSearch', findAll);
router.get('/exin', exinclude);
router.get('/op', operand);

module.exports = router;