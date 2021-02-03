import moment from "moment";
import React, { useEffect, useState } from "react";
import * as fAction from "../../../../actions/followUp.action";
import * as getAll from "../../../../actions/getAllFormToReucer.action";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Switch,
  Grid,
  Tooltip,
} from "@material-ui/core";
import "moment/locale/th";
import { useReactToPrint } from "react-to-print";
import { PRINT_THIS_SECTION } from "../../../../constants";

moment.locale("th");

let noData = "ไม่มีข้อมูล";

const ShowResult = React.forwardRef((props, ref) => {
  const FReducer = useSelector(({ followUpReducer }) => followUpReducer);
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
  } = FReducer.data2;
  const {
    cardio_result,
  } = FReducer.data3;
  const {
    oral_RESULT,
  } = FReducer.data5;
  return (
    <div className="" ref={ref}>
      <div className="" style={{ fontSize: "30px" }}>
        <p style={{ textAlign: "center", margin: 30 }}>
          <b>
            ข้อมูลการติดตามผลของคุณ {props.value.ELDER.FIRSTNAME}{" "}
            {props.value.ELDER.LASTNAME}
          </b>
        </p>
        <p>วัน{moment(props.value.APPOINT_DATE).format("dddd")} ที่{" "}
          {moment(props.value.APPOINT_DATE).format("LL")} เรื่อง {props.value.APP_NAME} </p>
        <div className="rfs2">
          <Typography>ข้อมูลสุขภาพทั่วไป</Typography>
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
        </div>

        {props.value.APP_NAME === "โรคหัวใจและหลอดเลือด" && (
          <div className="rfs3">
            <Typography>แบบประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</Typography>
            <Typography color="textSecondary">
              <p>
                ผลการประเมิน{" "}
                <strong>
                  {" "}
                  {cardio_result !== null ? cardio_result : noData}{" "}
                </strong>
              </p>
            </Typography>
          </div>
        )}
        {props.value.APP_NAME === "ตรวจสุขภาพช่องปาก" && (
          <div className="rfs5">
            <Typography>แบบประเมินสุขภาพช่องปาก</Typography>
            <Typography color="textSecondary">
              ผลการประเมิน{" "}
              <strong> {oral_RESULT !== null ? oral_RESULT : noData} </strong>
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
});

export default function ShowResultF({ value }) {
  const dispatch = useDispatch();
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [open, setOpen] = useState(false);
  const selectFollowUp = (id) => {
    dispatch(fAction.getResultFollowUp(value.APP_ID, value.APP_NAME));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(getAll.setDataToDefaultForAllSection());
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => selectFollowUp(value.VIS_ID)}
      >
        ดูข้อมูล
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        maxWidth="md"
        fullWidth={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" style={{ textAlign: "center" }}>
          ข้อมูลการติดตามผล
        </DialogTitle>
        <DialogContent dividers="paper">
          <Grid container justify="space-between">
            {/* print */}
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={PRINT_THIS_SECTION}
            >
              <button
                type="button"
                className="btn btn-tool"
                onClick={handlePrint}
              >
                <i className="fas fa-print"></i>
              </button>
            </Tooltip>
          </Grid>
          <DialogContentText>
            <ShowResult ref={componentRef} value={value} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ marginRight: 30 }}
          >
            ปิด
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
