import React from "react";
import {
  Chart9,
  Chart10,
  Chart11,
  Chart14,
  Chart22,
  Chart23,
  Chart31,
  Chart32,
  Chart33,
  Chart35,
  Chart36,
  Chart37,
  Chart16,
  Chart17,
  Chart18,
  Chart20,
  Chart21,
} from "../charts";

export default function ShowReport({ selectShowTable }) {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {selectShowTable === "เอว" ? (
            <React.Fragment>
              <Chart9 />
            </React.Fragment>
          ) : selectShowTable === "bmi" ? (
            <React.Fragment>
              <Chart10 /> <Chart11 /> <Chart14 />
            </React.Fragment>
          ) : selectShowTable === "cardio" ? (
            <React.Fragment>
              <Chart22 />
              <Chart23 />
            </React.Fragment>
          ) : selectShowTable === "สุขภาพช่องปาก" ? (
            <React.Fragment>
              <Chart31 />
            </React.Fragment>
          ) : selectShowTable === "abl" ? (
            <React.Fragment>
              <Chart32 />
              <Chart33 />
            </React.Fragment>
          ) : selectShowTable === "ภาวะสมองเสื่อม" ? 
              <React.Fragment>
                <Chart35 />
                <Chart36 />
                <Chart37 />
              </React.Fragment>
            : selectShowTable === "โรค" && 
              <React.Fragment>
                <Chart16 />
                <Chart17 />
                <Chart18 />
                <Chart20 />
                <Chart21 />
              </React.Fragment>
          }
        </div>
      </div>
    </section>
  );
}
