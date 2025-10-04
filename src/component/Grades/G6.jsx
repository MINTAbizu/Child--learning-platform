import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Grade6() {
  const location = useLocation();
  const studentName = location.state?.studentName;
  const studentgrade = location.state?.studentgrade;

  // Example pages (replace with dynamic data as needed)
  const pages = [
    {
      type: 'note',
      content: "Welcome to Grade 5! This week, we'll explore fractions, reading comprehension, and basic science experiments. Stay curious!"
    },
    {
      type: 'video',
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
    },
    {
      type: 'material',
      materials: [
        { title: "Math Worksheet: Fractions", link: "/materials/fractions.pdf" },
        { title: "Science Experiment Guide", link: "/materials/science-experiment.pdf" },
        { title: "Reading Comprehension", link: "/materials/reading.pdf" }
      ]
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));

  return (
    <div className="container py-4">
      <h2>Grade 5 Learning Page</h2>
      {studentName && <p>Welcome, {studentName}!</p>}
      {studentgrade && <p>Your grade is: {studentgrade}</p>}

      <div className="my-4">
        {pages[currentPage].type === 'note' && (
          <div className="alert alert-info">{pages[currentPage].content}</div>
        )}
        {pages[currentPage].type === 'video' && (
          <div className="ratio ratio-16x9 mb-3">
            <ReactPlayer url={pages[currentPage].url} controls width="100%" />
          </div>
        )}
        {pages[currentPage].type === 'material' && (
          <div>
            <h4>Learning Materials</h4>
            <ul className="list-group">
              {pages[currentPage].materials.map((mat, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  {mat.title}
                  <a href={mat.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Download</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentPage === 0}>Previous</button>
        <span>Page {currentPage + 1} of {pages.length}</span>
        <button className="btn btn-secondary" onClick={handleNext} disabled={currentPage === pages.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Grade6;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPlayer from 'react-player';

// function Gradefive() {
//   const [pages, setPages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/material/5')
//       .then(res => setPages(res.data));
//   }, []);

//   const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 0));
//   const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, pages.length - 1));

//   if (!pages.length) return <div>Loading...</div>;
//   const page = pages[currentPage];

//   return (
//     <div>
//       <h2>Grade 5 Learning Page</h2>
//       <div>
//         {page.type === 'note' && <div>{page.content}</div>}
//         {page.type === 'video' && <ReactPlayer url={page.url} controls width="100%" />}
//         {page.type === 'material' && (
//           <ul>
//             {page.materials.map((mat, idx) => (
//               <li key={idx}>
//                 {mat.title} <a href={mat.link} target="_blank" rel="noopener noreferrer">Download</a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <button onClick={handlePrev} disabled={currentPage === 0}>Prev</button>
//       <button onClick={handleNext} disabled={currentPage === pages.length - 1}>Next</button>
//     </div>
//   );
// }

// export default Gradefive;


