import { useState } from "react";
import { Fade, Slide } from "react-reveal";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!data) {
    return null;
  }

  const {
    name: contactName,
    address: { street, city, state, zip },
    phone,
    email: contactEmail,
    contactMessage,
  } = data;

  const { name, email, subject, message } = formData;

  const submitForm = () => {
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
      email
    )}): ${encodeURIComponent(message)}`;

    window.open(mailtoLink);
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{contactMessage}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form onSubmit={submitForm}>
              <fieldset>
                <div>
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    size="35"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    size="35"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    size="35"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={handleChange}
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="submit">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {contactName}
                <br />
                {contactEmail}
                <br />
                <br />
                {street} <br />
                {city}, {state} {zip}, India
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
};

export default Contact;
