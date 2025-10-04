import React, { useState } from 'react'
import '../teachear/teacher.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function BookTecheares() {
    const  [name , setname]=useState('')
    const  [email , setemil]=useState('')
    const  [phone , setphone]=useState('')
    const  [date , setdate]=useState('')
    const  [emailerrore , setemailerror]=useState('')


    const submithandler= async (e)=> {
         e.preventDefault();

         console.log(date)
const formdata={
    name,
    phone,
    email,
    date
}
console.log(formdata)
                       try {
// '
                                    const response = await fetch('http://localhost:3000/book/custmerbook', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(formdata),
                                    });
                                    const data = await response.json();
                                    console.log(data)
                                if (response.ok) {
                                    // setSuccess('Login successful');
                                }
                                } catch (error) {
                                console.error('Error:', error);
                                alert('Failed to submit contact information. Please try again.');
                                
                            }


        }


    

  return (
    <div>
        <div className="container bookcontsection   ">
            <div className="bookcontainer ">
                <form action="" onSubmit={submithandler} className=' shadow bg-light p-2 rounded bookinput '>
                   
                     <div className="mb-1 col-12 ">   
                         <label htmlFor="">name</label><br /> 
                       <input
                       onChange={(e)=>setname(e.target.value)}
                       value={name}
                       required
                        type="text"  placeholder='Please enter name' className=' bookinputs'/><br />
                     </div>
                  <div className="mb-1">   
                         <label htmlFor="">Phone</label><br /> 
                       <input type="phone"
                       onChange={(e)=>setphone(e.target.value)}
                       value={phone} 

                       required
                       placeholder='example :+251 09 82314943' className=' bookinputs'/><br />
                     </div>
                      <div className="mb-1">   
                         <label htmlFor="">Emaill:</label><br /> 

                       <input type="email" 
                       onChange={(e)=>setemil(e.target.value)}
                       value={email}
                       required
                       placeholder='Please enter Email' className=' bookinputs'/><br />
                     </div>
                      <div className="mb-1 ">   
                         <label htmlFor="">Date</label><br /> 
                       <input type="Date"
                       onChange={(e)=>setdate(e.target.value)}
                       value={date}
                       required
                       placeholder='Please Select Date Of Class Start' className=' bookinputs'/><br />
                     </div>

                     <button className='btn btn-primary'>Boook</button>




                </form>
            </div>
        </div>
      
    </div>
  )
}

export default BookTecheares
