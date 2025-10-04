import React from 'react'
import '../teachear/teacher.css';
// import {image} from '../../assets/hero.png'
function Benefits({teacher={}}) {
//      if (!teacher || Object.keys(teacher).length === 0) {
//     return <div className="teacher-card">No teacher data available.</div>;
//   }
     const { image,  title, description,  } = teacher;
  return (
    <div className="teacher-card teacher-cards teacher-shadow rounded p-3 mb-4 bg-">
      <div className=" align-items-center text-center">
        {image && (
          <img src={image} alt={name} className="teacher-img  align-items-center text-center" />
        )}
        <div>
          
          <div className="text-muted">{title}</div>
        </div>
      </div>
      <p className="mt-3">{description}</p>
      <div>View-Details</div>
    </div>
  );
}

export default Benefits
