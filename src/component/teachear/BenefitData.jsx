import React from 'react'
import Benefits from './Benefits';
// import {image} from '../../assets/hero.png'
function BenefitData() {
     const teachers = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      title: "Make money from any where ",
      experience: "5",
      description: "John has over 5 years of experience teaching mathematics to high school students. He is passionate about making math fun and engaging.",
      rating: 4
    },
    {
      
      image: "https://via.placeholder.com/150",
      title: "Schidule you'r avilabel Time and cost Price",
      experience: "7",
      description: "Jane specializes in physics and chemistry, making science exciting for all students.",
      rating: 5
    },
    {
      
      image: "https://via.placeholder.com/150",
      title: "Manage Students ",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3
    },
       {
       
      image: "https://via.placeholder.com/150",
      title: "Make money oline",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3
    },
    {
       
      image: "https://via.placeholder.com/150",
      title: "Sale  ur Course",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3
    },
     
  ];
  return (
    <div>
           <div className="container py-4">
      <h2 className="mb-4 text-center bold bg-white">Benefits of Becoming a teacher <br />on Kelal Tutorial </h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {teachers.map((teacher, idx) => (
          <Benefits key={idx} teacher={teacher} />
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default BenefitData
