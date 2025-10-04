import React from 'react';
import '../teachear/teacher.css';
import { Link } from 'react-router-dom';

function TeacherCard({ teacher = {} }) {
  // Guard: if teacher is not provided, show nothing or a fallback
  if (!teacher || Object.keys(teacher).length === 0) {
    return <div className="teacher-card">No teacher data available.</div>;
  }

  const { image, name, title,Learners,courses,Price , experience, description, rating } = teacher;

  return (
    <div className="teacher-card shadow rounded p-2 mb-1 bg-white">
      <div className="d-flex align-items-center ml-5 top">
        {image && (
          <img src={image} alt={name} className="teacher-img me-3" />
        )}
        <div className='information'>
          <h5 className="mb-1">{name}</h5>
          <div className="text-muted">{title}</div>
          <div className="small">Experience: {experience} years</div>
            <p className='m-2'>{Price}<span>Birr</span></p>
          
        </div>
        
        <div>
          
           <small>
           <p className='bold'>Learners : <span>{Learners}</span> </p>
          <p className='bold'>courses : <span className='bold bg-danger color-black'>{courses}</span></p>
        
         </small>
        
        </div>
        
      </div>
      <p className="mt-3">{description}</p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'star filled' : 'star'}>&#9733;</span>
        ))}
        <span className="ms-2">{rating}/5</span>
      </div>
      <Link to={'/BookTecheares'}> <button className='bg-Green m-2'>Book</button>  </Link> 
      <button className='bg-yellw m-2' >Contact</button>
      <button className='bg-danger'>View_Details</button>

    </div>
  );
}

export default TeacherCard;