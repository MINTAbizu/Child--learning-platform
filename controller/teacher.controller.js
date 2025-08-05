const teachermodel=require('../model/teacher.model')


const rigstration= async(req,res)=>{

    const {
FirstName,
Lastname,
Email,
Password,
PhoneNumber,
CountryorRegion,
ProfessionalTitle,
SubjectsTaught,
YearsofExperience,
HighestQualification,
ShortBio
  
}=req.body

try {
    if(!FirstName ||
Lastname ||
Email ||
Password ||
PhoneNumber || 
CountryorRegion || 
ProfessionalTitle ||
SubjectsTaught || 
YearsofExperience ||  HighestQualification  ||  ShortBio){

    res.status(400).json({msg:"fill all list fileds"})

}

  
  const findteachear= await teachermodel.findOne({Email})
    if(findteachear){
        res.status(400).json({msg:"techear aready existed"})
    }

     //password hash
     const salt= bcrypt.gensalt(10)
     const passwordhash=bcrypt.hash(Password,salt)
     //save 
     const saveuser= await teachermodel.save({
        FirstName,
Lastname,
Email,
Password:passwordhash, 
PhoneNumber,
CountryorRegion,
ProfessionalTitle,
SubjectsTaught,
YearsofExperience,
HighestQualification,
ShortBio

     })
     res.status(200).json(saveuser)
    
} catch (error) {
    
}


}





const login= async(req,res)=>{
    
}


module.exports ={
    rigstration,
    login
}