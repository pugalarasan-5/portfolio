import React, { useEffect, useState } from 'react';

const STRINGS = ['Backend Developer', 'Software Engineer', 'Web Developer'];
const TYPE_SPEED = 100;
const BACK_SPEED = 100;
const BACK_DELAY = 1000;

function Home() {
  const [displayed, setDisplayed] = useState('');
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = STRINGS[strIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), TYPE_SPEED);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), BACK_DELAY);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), BACK_SPEED);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStrIndex(i => (i + 1) % STRINGS.length);
    }

    setDisplayed(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex]);

  return (
    <section id="home" className="section-home">
      <div className="overlay">
        <h1 className="anim-title">Welcome to My Portfolio</h1>
        <p className="anim-text">
          I am a <span className="typed-text">{displayed}</span>
        </p>
        <button
  className="btn"
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  View My Work
</button>
      </div>
    </section>
  );
}

export default Home;