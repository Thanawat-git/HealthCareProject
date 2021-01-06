import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { useSelector } from "react-redux";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function SumaryReport() {
  const [open, setOpen] = useState(false);
  const forms2Reducer = useSelector(({ forms2Reducer }) => forms2Reducer);
const forms3Reducer = useSelector(({ forms3Reducer }) => forms3Reducer);
const forms4Reducer = useSelector(({ forms4Reducer }) => forms4Reducer);
const forms5Reducer = useSelector(({ forms5Reducer }) => forms5Reducer);
const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);
const formsTaiReducer = useSelector(({ formsTaiReducer }) => formsTaiReducer);
const forms7Reducer = useSelector(({ forms7Reducer }) => forms7Reducer);
const forms7mReducer = useSelector(({ forms7mReducer }) => forms7mReducer);
const forms8Reducer = useSelector(({ forms8Reducer }) => forms8Reducer);
const forms89qReducer = useSelector(({ forms89qReducer }) => forms89qReducer);
const forms9Reducer = useSelector(({ forms9Reducer }) => forms9Reducer);
const forms92Reducer = useSelector(({ forms92Reducer }) => forms92Reducer);
const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);

  return (
    <div >
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
      >
        ดูผลการประเมิน
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className="customized-dialog-title"
          onClose={() => setOpen(false)}
        >
          <h3 style={{ textAlign: "center" }}>สรุปผล</h3>
        </DialogTitle>
        <DialogContent dividers className="customized-dialog-content">
          {/* sec2 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}> <h4>ผลการประเมินสภาวะสุขภาพ</h4></Box>
          <h5> แปลผลเส้นรอบเอว </h5>
          <h5 style={{ marginLeft:20}}>{forms2Reducer.waistResult}</h5>
          <h5 > แปลผลค่า BMI </h5>
          <h5 style={{ marginLeft:20}}>{forms2Reducer.bmiResult}</h5>
          <h5> แปลผลความดันโลหิต </h5>
          <h5 style={{ marginLeft:20}}>{forms2Reducer.bloodPressureResult}</h5>
          <h5> แปลผลการตรวจระดับน้ำตาล </h5>
          <h5 style={{ marginLeft:20}}>{forms2Reducer.sugarResult}</h5>
          <hr />
          {/* sec3 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h4></Box>
          <h5>{forms3Reducer.results}</h5>
          <hr />
          {/* sec4 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินสุขภาพตา</h4></Box>
          <h5> {forms4Reducer.results} </h5>
          <hr />
          {/* sec5 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินสุขภาพช่องปาก</h4></Box>
          <h5> {forms5Reducer.results} </h5>
          <hr />
          {/* sec6 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินความสามารถในการทำกิจวัตรประจำ</h4></Box>
          <h5> คะแนนของคุณจัดอยู่ในกลุ่ม {forms6Reducer.group} </h5>
          {
            forms6Reducer.group !== 0 &&
            <h5> ผลการประเมิน TAI {formsTaiReducer.results} </h5>
          }
          
          <hr />
          {/* sec7 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินภาวะสมองเสื่อม</h4></Box>
          <h5> {forms7Reducer.results} </h5>
          {
            forms7Reducer.results !== 'การรู้คิดปกติ' &&
            <h5> ผลการประเมิน MMSE-Thai 2002 {forms7mReducer.results} </h5>
          }
          <hr />
          {/* sec8 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินการคัดกรองโรคซึมเศร้า</h4></Box>
          <h5> {forms8Reducer.results} </h5>
          {
            forms8Reducer.results !== 'ปกติ' &&
            <h5> {forms89qReducer.results} </h5>
          }
          
          <hr />
          {/* sec9 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินสุขภาพกระดูกและกล้ามเนื้อ</h4></Box>
          {/* เสี่ยงต่อการพัดตกหกล้ม */}
          <h5> ความเสี่ยงต่อการพัดตกหกล้ม: {forms9Reducer.result1} </h5>
           {/* ประเมินผลการเดิน */}
          <h5> ประเมินผลการเดิน: {forms9Reducer.result2} </h5>

          <h5> ตอนที่ 1 คัดกรองโรคข้อเข่าเสื่อมเบื่องต้น: {forms92Reducer.results} </h5>
          <h5> ตอนที่ 2 คัดกรองข้อเข่าเสื่อมทางคลินิค: {forms92Reducer.results2} </h5>
          <h5> ตอนที่ 3 แบบประเมินระดับความรุนแรงของโรคข้อเข่าเสื่อม (Oxford Knee Score): {forms92Reducer.results3} </h5>
          <hr />
          {/* sec10 */}
          <Box bgcolor="info.main" color="info.contrastText" p={1}><h4>ผลการประเมินการคัดกรองการกลั้นปัสสาวะ</h4></Box>
          <h5> {forms10Reducer.results} </h5>
        </DialogContent>
      </Dialog>
    </div>
  );
}
