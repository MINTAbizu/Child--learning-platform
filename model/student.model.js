const mongoose=require('mongoose')


const studentschema= new mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    grade:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    
    }

})


const studentmodel= mongoose.model('student',studentschema)

module.exports=studentmodel