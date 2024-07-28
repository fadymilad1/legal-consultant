import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Legalization() {
  return (
    <section id="About" className="new-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Why do we help with legalization?</h2>
          <p>
            We are here for UMKM in Indonesia to carry out the legalization
            process, which is sometimes complicated.
          </p>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="imgs/Circle Layer.png"
                      alt="circle layers"
                      width="37px"
                      height="37px"
                      className="d-block align-top"
                    />
                    Enviromental Law
                  </h5>
                  <p className="card-text">
                    Environmental legal issues might occur since the planned
                    business activities are designed
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="imgs/Bag.png"
                      alt="circle layers"
                      width="37px"
                      height="37px"
                      className="d-block align-top"
                    />
                    Corporate and Commercial
                  </h5>
                  <p className="card-text">
                    We provide a complete range of services for the continuity
                    of your business activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="imgs/Rocket.png"
                      alt="circle layers"
                      width="37px"
                      height="37px"
                      className="d-block align-top"
                    />
                    Information and Technology
                  </h5>
                  <p className="card-text">
                    IT not followed by the existing regulation which might cause
                    legal uncertainty and business uncertainty.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="imgs/User Arrows.png"
                      alt="circle layers"
                      width="37px"
                      height="37px"
                      className="d-block align-top"
                    />
                    Other Services
                  </h5>
                  <p className="card-text">
                    In dealing with disruptive economic and legal challenge, our
                    firm also provide various legal services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Legalization;
