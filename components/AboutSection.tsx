import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Nest.js" },
  { skill: "Docker" },
  { skill: "MySQL" },
  { skill: "Python" },
  { skill: "Git" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Sajjad and I am a{" "}
              <span className="font-bold">{"highly motivated"}</span>,
              <span className="font-bold">{" autonomous"}</span>, and
              <span className="font-bold">{" purposeful"}</span> software
              engineer currently living in Padua, Italy.
            </p>
            <br />
            <p>
              I graduated from IUST in 2020 with a M.Sc. in Computer Engineering
              and have been working in the field ever since.
            </p>
            <br />
            <p>
              In high school, I began programming with C++ and achieved victory
              in the &quot;2D Soccer Simulation&quot; competition at the
              Kharazmi Festival.
            </p>
            <br />
            <p>
              Following that, I worked as a system administrator at Mahna and
              Gardoon before transitioning into a developer role. Proficient
              with Docker, I enjoy working with React.js and Next.js for
              front-end development, while Nest.js is my preferred choice for
              backend development.{" "}
              <span className="font-bold text-teal-500">I love technology</span>{" "}
              and always want to push its limits. I&apos;m open to exploring new
              opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
