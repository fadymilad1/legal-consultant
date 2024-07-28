import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Question() {
  return (
    <section id="Contact" className="fifth-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h2>Complex Questions?</h2>
          <p>
            Request for a personalized budget for your legal problem. We will
            send you a couple options in 24 hours. You can have free consult, if
            our first customer
          </p>
          <a href="https://example.com" className="btn btn-secondary btn-lg mb-5">
            <img
              src="imgs/call.png"
              alt="call now"
              style={{ width: "28.56px", height: 32, marginRight: 10 }}
            />
            Call now
          </a>
        </div>
        <div className="col">
          <img
            src="imgs/person calling.png"
            className="img-fluid"
            alt="calling person"
            style={{ borderRadius: "0px 0px 0px 40px" }}
          />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Question;
