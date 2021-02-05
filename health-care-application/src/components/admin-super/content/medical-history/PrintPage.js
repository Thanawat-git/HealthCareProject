import React, { useEffect, useState } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import AllFormForPrint from "./AllFormForPrint";
import { useDispatch, useSelector } from "react-redux";
import {
  blue,
  grey,
} from "@material-ui/core/colors";
import PrintIcon from '@material-ui/icons/Print';
import {
  Button,
  Accordion,
  AccordionDetails,
  Typography,
  makeStyles,
} from "@material-ui/core";
let noResult = "ไม่มีผลการประเมิน";
let noData = "ไม่มีข้อมูล";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  interval: {
    marginLeft: 50,
    marginRight:30
  },
}));
function ResultForm({value}) {
  const historyReducer = useSelector(({ historyReducer }) => historyReducer);
  const classes = useStyles();
  const {
    waist_waist,
    waist_result,
    bmi_weight,
    bmi_height,
    bmi_bmi,
    bmi_result,
    bp_pulse,
    bp_sys,
    bp_dia,
    bp_result,
    fbs_fast,
    fbs_fbs,
    fbs_result,
    cardio_result,
    eye_result,
    oral_result,
    abi_group,
    tai_group,
    alz_result,
    mmse_result,
    dep_result,
    dep_9q_result,
    bone_result,
    bone_walk,
    ost_1_result,
    ost_2_result,
    ost_3_result,
    uri_result,

  } = historyReducer.resultSelected;
  useEffect(() => {
console.log('value : >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ',value)
  }, [])
  
  return (
    <div style={{ fontSize: "30px" }}>
      <p style={{ textAlign: "center", margin: 30 }}>
        <b>ผลการประเมินของคุณ {value.ELD_NAME}</b>
      </p>
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>ข้อมูลสุขภาพทั่วไป</Typography>
          <AccordionDetails>
            <Typography color="textSecondary">
              <p>
                ความยาวเส้นรอบเอว:
                {waist_waist ? (
                  <React.Fragment>
                    <strong> {waist_waist} </strong>ซม. ผลการประเมิน{" "}
                    <strong> {waist_result} </strong>
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
              <p>
                น้ำหนัก:
                {bmi_weight ? (
                  <React.Fragment>
                    <strong> {bmi_weight} </strong>กก.
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
              <p>
                ส่วนสูง:
                {bmi_height ? (
                  <React.Fragment>
                    <strong> {bmi_height} </strong>ซม.
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
              <p>
                ดัชนีมวลการ(BMI):
                {bmi_bmi ? (
                  <React.Fragment>
                    <strong> {bmi_bmi} </strong>
                    ผลการประเมิน <strong> {bmi_result} </strong>
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
              <p>
                ชีพจร:
                {bp_pulse ? (
                  <React.Fragment>
                    <strong> {bp_pulse} </strong>ครั้ง/นาที
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
              <p>
                ความดันโลหิต:
                {bp_sys ? (
                  <React.Fragment>
                    <strong>
                      {" "}
                      {bp_sys}/{bp_dia}{" "}
                    </strong>
                    มม.ปรอท ผลการประเมินความดันโลหิต:{" "}
                    <strong> {bp_result} </strong>
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
              <p>
                การประเมินระดับน้ำตาลจากปลายนิ้ว
                {bp_sys ? (
                  <React.Fragment>
                    <p>
                      ผู้สูงอายุ{!fbs_fast && <strong>ไม่ได้</strong>}
                      มีการงดอาหารก่อนมาตรวจอย่างน้อย 8 ชั่วโมง
                    </p>
                    ระดับน้ำตาลจากปลายนิ้ว: <strong>{fbs_fbs} </strong>
                    มก./ดล
                    <p>
                      ผลการประเมินระดับน้ำตาลจากปลายนิ้ว{" "}
                      <strong>{fbs_result} </strong>
                    </p>
                  </React.Fragment>
                ) : (
                  <strong> {noData} </strong>
                )}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* -----------------------1------------------------- */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</Typography>
          <AccordionDetails>
            <Typography color="textSecondary">
              <p>
                ผลการประเมิน{" "}
                <strong>
                  {" "}
                  {cardio_result !== null ? cardio_result : noResult}{" "}
                </strong>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* ---------------------------------2-------------------------- */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบคัดกรองสุขภาพตา</Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong> {eye_result !== null ? eye_result : noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* ---------------------------------3-------------------------- */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบประเมินสุขภาพช่องปาก</Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong> {oral_result !== null ? oral_result : noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* ---------------------------------4-------------------------- */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>
            แบบประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ
          </Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong>
                {" "}
                {abi_group !== null
                  ? `ผู้สูงอายุอยู่กลุ่ม ${abi_group}`
                  : noResult}{" "}
              </strong>
              {abi_group != "1" && (
                <React.Fragment>
                  <p>
                    {" "}
                    ผลการประเมิน TAI{" "}
                    {tai_group !== null ? (
                      <strong>ผู้สูงอายุอยู่กลุ่ม {tai_group}</strong>
                    ) : (
                      noResult
                    )}
                  </p>
                </React.Fragment>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* ---------------------------------5-------------------------- */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบประเมินภาวะสมองเสื่อม</Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong>
                {" "}
                {alz_result !== null ? `${alz_result}` : noResult}{" "}
              </strong>
              {alz_result != "ผิดปกติ" && (
                <React.Fragment>
                  {mmse_result !== null ? (
                    <p>
                      ผลการประเมิน MMSE-Thai 2002:{" "}
                      <strong>{mmse_result}</strong>
                    </p>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* แบบคัดกรองโรคซึมเศร้า, dep_result, 9q */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบคัดกรองโรคซึมเศร้า</Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong>
                {" "}
                {dep_result !== null ? (
                  <React.Fragment>
                    {dep_result != "ปกติ" && dep_9q_result}
                  </React.Fragment>
                ) : (
                  noResult
                )}{" "}
              </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* แบบประเมินสุขภาพกระดูกและกล้ามเนื้อ ข้อเข่าเสื่อม */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบประเมินสุขภาพกระดูกและกล้ามเนื้อ</Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมินความเสี่ยงต่อการพลัดตกหกล้ม:{" "}
              <strong>
                {" "}
                ผู้สูงอายุ
                {bone_walk !== null ? (
                  <React.Fragment>
                    {bone_walk == "เดินไม่ได้"
                      ? bone_result
                      : `${bone_walk} ${bone_result}`}
                  </React.Fragment>
                ) : (
                  noResult
                )}{" "}
              </strong>
              <br />
              <br />
              ผลการประเมินโรคข้อเข่าเสื่อม
              <p>
                ตอนที่ 1 ระดับความเจ็บปวดของข้อเข่า:{" "}
                {ost_1_result == "ไม่มีอาการปวดเข่า" ? (
                  "ผู้สูงอายุไม่มีอาการปวดเข่า"
                ) : (
                  <React.Fragment>
                    ผู้สูงอายุมีอาการปวดเข่าที่ระดับ{" "}
                    {ost_1_result ? (
                      <React.Fragment>
                        {" "}
                        <strong>{ost_1_result}</strong> จาก 10
                      </React.Fragment>
                    ) : (
                      <strong>{noResult}</strong>
                    )}
                  </React.Fragment>
                )}
              </p>
              <p>
                ตอนที่ 2 การคัดกรองข้อเข่าเสื่อมทางคลินิก:{" "}
                {ost_2_result !== null ? (
                  <strong>{ost_2_result}</strong>
                ) : (
                  <strong>{noResult}</strong>
                )}
              </p>
              ตอนที่ 3 แบบประเมินระดับความรุนแรงของโรคข้อเข่าเสื่อม (Oxford Knee
              Score)
              <p>
                ผลการประเมิน:{" "}
                {ost_3_result !== null ? (
                  <strong>{ost_3_result}</strong>
                ) : (
                  <strong>{noResult}</strong>
                )}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* แบบคัดกรองการกลั้นปัสสาวะ */}
      <div className={classes.interval}>
        <Accordion expanded={true}>
          <Typography>แบบคัดกรองการกลั้นปัสสาวะ</Typography>

          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong> {uri_result !== null ? uri_result : noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

class ResultOnly extends React.Component {
  render() {
    return <ResultForm value={this.props.value}  />;
    
  }
}

export class PrintResultOnly extends React.PureComponent {
  render() {
   
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>',this.props.value)
    return (
      <div>
        <ReactToPrint  content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <Button style={{
                backgroundColor: blue[700],
                color: grey[50],}}
               onClick={handlePrint} 
              startIcon={<PrintIcon />}
              >{this.props.name}</Button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <div style={{ display: "none" }}>
          <ResultOnly value={this.props.value} ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

class AllForm extends React.Component {
  render() {
    return (
      <div>
        <AllFormForPrint />
      </div>
    );
  }
}

export class PrintAllForm extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <Button style={{
                backgroundColor: blue[600],
                color: grey[50],
              }} onClick={handlePrint} 
              startIcon={<PrintIcon />}>{this.props.name}</Button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <div style={{ display: "none" }}>
          <AllForm ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}
