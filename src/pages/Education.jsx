import "./Education.css";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GEC Autonomous College",
    duration: "2024 - 2026",
    score: "9.46 CGPA",
  },
  {
    degree: "Bachelor of Computer Applications (Bsc ITM)",
    institution: "Ravenshaw University",
    duration: "2021 - 2024",
    score: "8.7 CGPA",
  },
  {
    degree: "Higher Secondary Education (XII) , Science",
    institution: "SVM Autonomous College",
    duration: "2019 - 2021",
    score: "86.83%",
  },
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          My <span className="text-gradient">Education</span>
        </h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-card">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-duration">{edu.duration}</p>
              <p className="edu-score">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
