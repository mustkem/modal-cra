import React from "react";
import AmCharts from "./components/AmCharts/components/BarChart";
import BarChart from "./components/D3/components/BarChart";

function Charts() {
  return (
    <div className="home-content main-content">
      <div className="container">
        <h1>Charts</h1>
        <div className="row">
          <div className="col-10">
            {/* <AmCharts /> */}
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
