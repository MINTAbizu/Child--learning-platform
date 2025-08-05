import React from 'react';
import '../teachear/teacher.css';

function TeacherCard({ teacher = {} }) {
  // Guard: if teacher is not provided, show nothing or a fallback
  if (!teacher || Object.keys(teacher).length === 0) {
    return <div className="teacher-card">No teacher data available.</div>;
  }

  const { image, name, title, experience, description, rating } = teacher;

  return (
    <div className="teacher-card shadow rounded p-3 mb-4 bg-white">
      <div className="d-flex align-items-center">
        {image && (
          <img src={image} alt={name} className="teacher-img me-3" />
        )}
        <div>
          <h5 className="mb-1">{name}</h5>
          <div className="text-muted">{title}</div>
          <div className="small">Experience: {experience} years</div>
        </div>
      </div>
      <p className="mt-3">{description}</p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'star filled' : 'star'}>&#9733;</span>
        ))}
        <span className="ms-2">{rating}/5</span>
      </div>
    </div>
  );
}

export default TeacherCard;