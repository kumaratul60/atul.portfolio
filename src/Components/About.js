import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  if (!data) {
    return null; // Return early if data is not available
  }

  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resumeDownload,
  } = data;

  const profilePic = `images/${image}`;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            data-aos="flip-right"
            data-aos-delay="200"
            data-aos-duration="900"
            className="profile-pic"
            src={profilePic}
            alt={`${name}'s Profile Pic`}
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={resumeDownload}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
