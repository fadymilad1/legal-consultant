import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Footer() {
  return (
    <footer id="Terms" className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-companyname">
            <img
              src="imgs/footer imags logo L.png"
              alt="footer company logo"
              width="54px"
              height="54px"
              className="d-inline"
            />
            Lawliet
          </div>
        </div>
        <div className="col-md-9 d-flex justify-content-end">
          <div className="me-5">
            <h5>Product</h5>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Releases</a>
              </li>
            </ul>
          </div>
          <div className="me-5">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
