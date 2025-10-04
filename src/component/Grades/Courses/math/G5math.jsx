import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

function G5math() {
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
    <div>
         <div className="my-4 center">
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
                <div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handlePrev} disabled={currentPage === 0}>Previous</button>
                <span>Page {currentPage + 1} of {pages.length}</span>
                <button className="btn btn-secondary" onClick={handleNext} disabled={currentPage === pages.length - 1}>Next</button>
              </div>
        
        
        </div>
              </div>
      
    </div>
  )
}

export default G5math
