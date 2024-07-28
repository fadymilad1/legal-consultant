import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Testimonial({ data = [], loading, error }) {
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 2 }
    }
  };

  return (
    <section
      id="Testimonials"
      className="forth-section"
      style={{ backgroundColor: "#F2F7FF" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="testimonial-header">Clients Testimonial</h2>
          </div>
        </div>
        <OwlCarousel ref={carouselRef} className="owl-theme" {...options}>
          {data.length > 0 ? data.map((testimonial, index) => (
            <div className="item" key={index}>
              <div className="card-testimonials">
                <div className="card-body-testimonials">
                  <h5 className="card-title-testimonials">{testimonial.title}</h5>
                  <p className="card-text-testimonials">{testimonial.description}</p>
                  <div className="card-rating-testimonials">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fa-star ${i < testimonial.rating ? 'fa-solid' : 'fa-regular'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-details d-flex align-items-center mt-3">
                <img
                  src={testimonial.imgUrl}
                  alt={testimonial.name}
                  className="img-fluid rounded-circle testimonial-image me-3"
                />
                <div>
                  <h6 className="mb-0">{testimonial.name}</h6>
                  <p className="mb-0">{testimonial.jobTitle}</p>
                </div>
              </div>
            </div>
          )) : <p>No testimonials available</p>}
        </OwlCarousel>
      </div>
      <div className="custom-nav">
        <button className="custom-prev" aria-label="Previous Slide" title="Previous Slide" onClick={handlePrev}>
          <i className="fa-solid fa-angle-left" />
        </button>
        <button className="custom-next" aria-label="Next Slide" title="Next Slide" onClick={handleNext}>
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
