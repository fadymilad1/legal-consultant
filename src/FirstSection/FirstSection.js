import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function FirstSection() {
  return (
    <section id="intro" className="intro-section">
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <div className="custom-section d-flex align-items-center justify-content-center mb-4">
              <div className="custom-badge">New</div>
              <div className="custom-text">
                Stay connected to the upcoming &amp; Recent jobs
              </div>
            </div>
            <h1 className="display-6">Your Solution Legal Consultancy</h1>
            <p className="lead my-4">
              We are here to help you take care of your legality with the best
              service especially for you.
            </p>
            <a href="https://example.com" className="btn btn-secondary btn-lg">
              GET STARTED
            </a>
            <p className="trusted-companies">
              Trusted by 10+ companies in Indonesia
            </p>
            <div className="company-logos">
              <a href="https://airbnb.com" target="_blank" rel="noreferrer">
                <img src="imgs/Airbnb Logo.png" alt="Airbnb" />
              </a>
              <a href="https://hubspot.com" target="_blank" rel="noreferrer">
                <img src="imgs/Hubspot Logo.png" alt="Hubspot" />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src="imgs/Google Logo.png" alt="Google" />
              </a>
              <a href="https://microsoft.com" target="_blank" rel="noreferrer">
                <img src="imgs/Microsoft Logo.png" alt="Microsoft" />
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <span className="tt" data-bs-placement="bottom">
              <img
                src="imgs/Hero Image.png"
                className="img-fluid"
                alt="Hero"
              />
            </span>
            <div className="consultant-bar">
              <h5>Tiara Andini</h5>
              <p>~ Lawyer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
