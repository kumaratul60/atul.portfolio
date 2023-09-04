import { Slide } from "react-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = ({ data }) => {
  AOS.init();

  if (!data) {
    return null;
  }

  const { skillMessage, education, work, skills } = data;

  const renderEducation = () => {
    if (!education || education.length === 0) {
      return null;
    }

    return education.map((educationItem) => (
      <div key={educationItem.school}>
        <h3>{educationItem.school}</h3>
        <p className="info">
          {educationItem.degree} <span>&bull;</span>
          <em className="date">{educationItem.graduated}</em>
        </p>
        <p>{educationItem.description}</p>
      </div>
    ));
  };

  const renderWork = () => {
    if (!work || work.length === 0) {
      return null;
    }

    return work.map((workItem) => (
      <div key={workItem.company}>
        <h3>{workItem.company}</h3>
        <p className="info">
          {workItem.title}
          <span>&bull;</span> <em className="date">{workItem.years}</em>
        </p>
        <p>{workItem.description}</p>
      </div>
    ));
  };

  const renderSkills = () => {
    if (!skills || skills.length === 0) {
      return null;
    }

    return skills.map((skillsItem) => (
      <li key={skillsItem.name}>
        <em>{skillsItem.name}</em>
      </li>
    ));
  };

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div
            className="nine columns main-col"
            data-aos="fade-down-left"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <div className="row item">
              <div className="twelve columns">{renderEducation()}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div
          className="row work"
          data-aos="fade-down-right"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{renderWork()}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillMessage}</p>

            <div className="bars">
              <ul className="skills">{renderSkills()}</ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
