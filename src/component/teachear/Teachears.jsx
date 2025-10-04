import React from 'react';
import TeacherCard from './TeacherCard';

function Teachears() {
  const teachers = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      title: "Math Teacher",
      experience: "5",
      description: "John has over 5 years of experience teaching mathematics to high school students. He is passionate about making math fun and engaging.",
      rating: 4,
      Learners:56,
      courses:0,
      Price:12
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      title: "Science Teacher",
      experience: "7",
      description: "Jane specializes in physics and chemistry, making science exciting for all students.",
      rating: 5,
       Learners:5,
       courses:1

    },
    {
      name: "Alex Brown",
      image: "https://via.placeholder.com/150",
      title: "English Teacher",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3,
       Learners:6,
       courses:0
    },
       {
      name: "Alex Brown",
      image: "https://via.placeholder.com/150",
      title: "English Teacher",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3,
       Learners:23,

       courses:0
    },
       {
      name: "Alex Brown",
      image: "https://via.placeholder.com/150",
      title: "English Teacher",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3,
       Learners:2
    },   {
      name: "Alex Brown",
      image: "https://via.placeholder.com/150",
      title: "English Teacher",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3,
       Learners:5
    },
       {
      name: "Alex Brown",
      image: "https://via.placeholder.com/150",
      title: "English Teacher",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3,
       Learners:23
    },
       {
      name: "Alex Brown",
      image: "https://via.placeholder.com/150",
      title: "English Teacher",
      experience: "3",
      description: "Alex helps students master English literature and writing skills.",
      rating: 3
    }
  ];

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Our Teachers</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {teachers.map((teacher, idx) => (
          <TeacherCard key={idx} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Teachears;