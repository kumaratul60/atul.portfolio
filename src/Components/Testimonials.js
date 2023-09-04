const Testimonials = ({ data }) => {
  if (!data) {
    return null;
  }

  const { testimonials } = data;

  const renderTestimonials = () => {
    if (!testimonials || testimonials.length === 0) {
      return null;
    }

    return testimonials.map((testimonial) => (
      <li key={testimonial.user}>
        <blockquote>
          <p>{testimonial.text}</p>
          <cite>{testimonial.user}</cite>
        </blockquote>
      </li>
    ));
  };

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{renderTestimonials()}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
