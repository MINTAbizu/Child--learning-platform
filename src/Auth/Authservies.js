import axios from 'axios'

const API_URL= 'http://localhost:5000/student'

const api=axios.create({
    baseURL:API_URL,
    withCredentials:true,
      headers: {
    'Content-Type': 'application/json',
  },
})

export const Authservies ={
    register:async (userdata)=>{
        const response = await api.post('/student/register',userdata)

        return response
    },
    login: async (credatials)=>{
        const responsess =await api.post('/login', credatials)
        return responsess
    },
    getcurrentuser:async ()=>{
        const response= await api.get('/getuser',)
        return response
    },
    checklogin:async()=>{
        const response= await api.get('/checklogin')
        return response
    },
    logout: async ()=>{
        const  response= await api.get('/logout')
        return response
    },
    changepassword: async(changepassword)=>{
        const  response =await api.patch('/changepassword')

        return response
    },
    forgetPassword: async(email)=>{
        const response =await api.post('/forgetPassword')
        return response 
    }
    
}


export default api
