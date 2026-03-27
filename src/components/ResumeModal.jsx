import React from 'react';

function ResumeModal({ onClose }) {
  return (
    <div className="resume-overlay" onClick={onClose}>
      <div
        className="resume-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img
          src="src\assets\Resume.pdf"
          alt="Resume preview"
          className="resume-image"
        />
        <h2>Resume</h2>
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        <a
          href="src\assets\Resume.pdf"
          download
          className="download-btn"
        >
          Download File
        </a>
      </div>
    </div>
  );
}

export default ResumeModal;