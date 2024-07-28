import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function Counter() {

    const [counted, setCounted] = useState(false);

    const stats = [
      { id: "stat1", target: 30, duration: 2000 },
      { id: "stat2", target: 300, duration: 2000 },
      { id: "stat3", target: 8, duration: 2000 }
    ];
    const updateStats = () => {
      if (!counted) {
        stats.forEach(stat => {
          let count = 0;
          const increment = stat.target / (stat.duration / 100);
  
          const updateStat = () => {
            if (count < stat.target) {
              count += increment;
              const displayValue = stat.id === "stat2" ? Math.floor(count).toLocaleString() + "+" : Math.floor(count).toLocaleString();
              document.getElementById(stat.id).innerText = displayValue;
              setTimeout(updateStat, 100);
            } else {
              const finalValue = stat.id === "stat2" ? stat.target.toLocaleString() + "+" : stat.target.toLocaleString();
              document.getElementById(stat.id).innerText = finalValue;
            }
          };
  
          updateStat();
        });
        setCounted(true);
      }
    };

  return (
    <section className="pattern-section" id="pattern-section">
      <Waypoint onEnter={updateStats}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h2>Some count that matters</h2>
              <p>Our achievement in the journey depicted in numbers</p>
              {/* Dynamic Statistics Section */}
              <div className="row stats-section">
                <div className="col-md-4 stats-item">
                  <h1 id="stat1">{stats.clients}</h1>
                  <p>Clients</p>
                </div>
                <div className="col-md-4 stats-item">
                  <h1 id="stat2">{stats.legalities}</h1>
                  <div className="divider" />
                  <p>Taken business legalities</p>
                </div>
                <div className="col-md-4 stats-item">
                  <div className="divider" />
                  <h1 id="stat3">{stats.years}</h1>
                  <p>Years of Journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Waypoint>
    </section>
  );
}

export default Counter;
