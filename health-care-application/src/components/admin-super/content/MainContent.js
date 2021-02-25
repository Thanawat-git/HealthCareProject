import React from "react";
import { useDispatch} from "react-redux";
import {
  Chart1,
  Chart2,
  Chart3,
  Chart4,
  Chart5,
  Chart6,
  Chart7,
  Chart8,

} from "./charts";
import {
  getDataChart1,
  getDataChart2,
  getDataChart3,
  getDataChart4,
  getDataChart5,
  getDataChart6,
  getDataChart7,
  getDataChart8,

} from "../../../actions/charts.action";

export default function MainContent() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("in mainmenu use Effect");
    dispatch(getDataChart1())
    dispatch(getDataChart2("ใส่อะไรก็ได้แต่ต้องใส่เพราะไอ้บิ๊กไม่ยอมแก้"))
    dispatch(getDataChart3("ไม่จำเป็นต้องส่งอะไรว่างๆก็ลบได้"))
    dispatch(getDataChart4("ไม่จำเป็นต้องส่งอะไรว่างๆก็ลบได้"))
    dispatch(getDataChart5("ไม่จำเป็นต้องส่งอะไรว่างๆก็ลบได้"))
    dispatch(getDataChart6("ไม่จำเป็นต้องส่งอะไรว่างๆก็ลบได้"))
    dispatch(getDataChart7("ไม่จำเป็นต้องส่งอะไรว่างๆก็ลบได้"))
    dispatch(getDataChart8("ไม่จำเป็นต้องส่งอะไรว่างๆก็ลบได้"))

  }, []);
  return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">หน้าแรก</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1">
                  <i className="fas fa-users-cog" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">จำนวนผู้ดูแลระบบ</span>
                  <span className="info-box-number">10</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-danger elevation-1">
                  <i className="fas fa-user-shield" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">จำนวนอาสาสมัคร</span>
                  <span className="info-box-number">20</span>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-success elevation-1">
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">จำนวนแพทย์</span>
                  <span className="info-box-number">12</span>
                </div>
              </div>
            </div> */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1">
                  <i className="fas fa-users" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">จำนวนผู้สูงอายุ</span>
                  <span className="info-box-number">1000</span>
                </div>
              </div>
            </div>

            <Chart1 />
            <Chart2 />
            <Chart3 />
            <Chart4 />
            <Chart5 />
            <Chart6 />
            <Chart7 />
            <Chart8 /> 

          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
