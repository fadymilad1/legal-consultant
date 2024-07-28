import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function SubFooter() {
  return (
    <div className="subfooter-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>© 2024 Lawliet. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-end">
          <a href="https://instagram.com" target="_blank">
            <img
              src="imgs/instaa.png"
              alt="instagram"
              className="social-icon"
            />
          </a>
          <a href="https://google.com" target="_blank">
            <img src="imgs/browser.png" alt="browser" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src="imgs/twitter.png" alt="twitter" className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src="imgs/youtube.png" alt="youtube" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SubFooter;
