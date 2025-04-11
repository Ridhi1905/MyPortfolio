import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "C++",
    "Python",
    "JavaScript",
    "React",
    "database",
    "Machine Learning",
    "Data Structures",
    "HTML",
    "CSS",
  ];
  const InterPersonalSkills = [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Time Management",
  ];
  return (
    <div className="mt-20">
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/3435d728-70f5-44da-ae22-80826604a833/XoONPR3YIa.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-black">
            Hey! I’m Ridhima Chauhan, a Computer Science student fueled by
            curiosity, creativity, and a love for continuous learning. With a
            strong passion for Artificial Intelligence and Data Science, I
            strive to bridge the gap between technology and meaningful impact.
          </p>
          <p>
            My journey so far has equipped me with a solid foundation in AI,
            machine learning, and frontend development — allowing me to blend
            logic with creativity. Whether I’m developing intuitive web
            interfaces with React and Tailwind CSS or diving deep into complex
            algorithms, I approach every project with a problem-solving mindset
            and a commitment to excellence.
          </p>
          <p>
            I'm currently seeking opportunities where I can contribute to
            impactful projects, collaborate with forward-thinking teams, and
            continue expanding my knowledge in a dynamic, challenging
            environment. Let’s connect and create something amazing together!
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl font-bold">Here are the skills I have:</h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-secondary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl font-bold">
          Here are the Interpersonal skills I have:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {InterPersonalSkills.map((skill, index) => (
            <div key={index} className="border border-secondary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
