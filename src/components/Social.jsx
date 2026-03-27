import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Social({ onResumeClick }) {
  return (
    <div className="social">
      <h2>View My Social Profiles</h2>

      <div className="link2">
        <a
          href="https://www.linkedin.com/in/pugal-arasan-r-47a062328"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://github.com/pugalarasan-5/my-presonal"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="#social">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>

        <a href="#social">
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <button className="resume-btn" onClick={onResumeClick}>
          Resume
        </button>
      </div>
    </div>
  );
}

export default Social;