const e = require('express')
const express=require('express')

const route=express.Router()

const {rigstration,login}=require("../controller/teacher.controller")


route.post("/teachearrigsteration",rigstration)
route.post("/teachearlogin",login)

module.exports=route

