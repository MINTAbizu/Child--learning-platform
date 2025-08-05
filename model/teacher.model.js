
const mongoose=require('mongoose')

const Teachearschema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required
    },
    phonenumber:{
        type:Number,

    },
    country:{
        type:String,
        default:"ethiopia"

    },
    region:{
        type:String
    },
    ProfessionalTitle:{
        type:String,
        required:true

    },
SubjectsTaught:{
    type:String,
    required:true

},
YearsofExperience:{
    type:String,
    required:true

},
HighestQualification:{
      type:String,
    required:true

}
    

    
})


const teachearmodel= mongoose.model("Teachear",Teachearschema)

module.exports =teachearmodel