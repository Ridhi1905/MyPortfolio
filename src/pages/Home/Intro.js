import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-black">Hi, This is</h1>
      <h1 className="text-7xl sm:text-5xl text-secondary font-semibold">
        Ridhima Chauhan
      </h1>
      <h1 className="text-5xl sm:text-3xl text-black font-semibold">
        I am currently a Bachelor's student at Chandigarh University
      </h1>
      <p className="text-black w-2/3">
        I'm an AI enthusiast with a strong foundation in machine learning,
        frontend development, and UI/UX design. I love building clean,
        responsive interfaces using React and Tailwind CSS, and enjoy turning
        ideas into impactful, user-friendly experiences. Always eager to learn,
        grow, and contribute to meaningful tech-driven projects.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
