import React from "react";
import { Chart9, Chart10, Chart11, Chart14 } from "../charts";

export default function Textreport({ selectShowTable }) {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {
          selectShowTable === "เอว" ? <Chart9 /> 
          : selectShowTable === "bmi" ? <React.Fragment><Chart10 /> <Chart11 /> <Chart14 /> </React.Fragment> 
          : "nooooo"
        }
        </div>
      </div>
    </section>
  );
}
