import React from "react";
import { Chart9, Chart10, Chart11, Chart14 } from "../charts";

export default function Textreport({ selectShowTable }) {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {
          selectShowTable === "เอว" 
          ? <React.Fragment>
            <Chart9 />
            </React.Fragment>
          : selectShowTable === "bmi" 
          ? <React.Fragment>
            <Chart10 /> <Chart11 /> <Chart14 /> 
            </React.Fragment> 
          : selectShowTable === "ค่าความดันโลหิต" 
          ? <React.Fragment></React.Fragment>
          : selectShowTable === "cardio" 
          ? <React.Fragment></React.Fragment>
          : selectShowTable === "สุขภาพช่องปาก" 
          ? <React.Fragment></React.Fragment>
          : selectShowTable === "abl" 
          ? <React.Fragment></React.Fragment>
          : selectShowTable === "ภาวะสมองเสื่อม" 
          && <React.Fragment></React.Fragment>
          
        }
        </div>
      </div>
    </section>
  );
}
