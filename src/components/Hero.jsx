import { useState, useEffect } from 'react';

export default function Hero({ onShowResume }) {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ["Frontend Developer", "YouTuber", "Web Developer"];

    let timer;

    const type = () => {
      const current = roles[roleIndex];

      if (isDeleting) {
        setCurrentRole(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentRole(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    };

    if (!isDeleting && charIndex === roles[roleIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(type, isDeleting ? 70 : 100);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="section-home">
      <div className="overlay">
        <h1 className="anim-title">Hi, I'm Pugal Arasan</h1>
        <p className="anim-text">
          I'm a <span>{currentRole}</span>
          <span className="typed-cursor">|</span>
        </p>
        <button className="resume" onClick={onShowResume}>
          View Resume
        </button>
      </div>
    </section>
  );
}