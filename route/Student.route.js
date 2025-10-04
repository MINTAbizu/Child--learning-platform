const express= require('express')
const {register,login}= require('../controller/student.controller')
const router=express.Router()


router.post('/student/register' ,register)
router.post('/student/login' ,login)



module.exports=router