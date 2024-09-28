import React from 'react';

const experiences = [
  {
    company: "Swami Infotech ",
    position: "Frontend Developer (Intern)",
    duration: "Feb 2024 - may 2024 ",
    description: "As a Frontend Development Intern, I actively engaged in web development, focusing on creating visually appealing and responsive frontend elements. Gained hands-on experience with API integration, ensuring seamless data flow between the frontend and backend. Developed a strong foundation in web development, improving my ability to craft high-quality UI components and elements.",
    skills: ["Angular", "TypeScript","UI Creation", "Bootstrap", "REST API's"]
  }
];

function ExperienceSection() {
  return (
    <div id="experience" className='pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-b from-black via-black to-gray-900 text-white'>
    <div className='section'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-start mb-8 text-gray-300">Professional Experience</h2>
        <div className="grid gap-6 md:grid-row">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-blue-500 text-white p-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="mr-2">&#128188;</span>
                  {exp.company}
                </h3>
                <p className="text-sm mt-1 opacity-90">{exp.position}</p>
              </div>
              <div className="p-4 flex-grow">
                <p className="text-sm text-gray-600 mb-2">{exp.duration}</p>
                <p className="text-sm text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</div>
  );
}

export default ExperienceSection;