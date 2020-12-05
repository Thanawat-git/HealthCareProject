import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
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
const forms7Reducer = useSelector(({ forms7Reducer }) => forms7Reducer);
const forms8Reducer = useSelector(({ forms8Reducer }) => forms8Reducer);
const forms89qReducer = useSelector(({ forms89qReducer }) => forms89qReducer);
const forms9Reducer = useSelector(({ forms9Reducer }) => forms9Reducer);
const forms92Reducer = useSelector(({ forms92Reducer }) => forms92Reducer);
const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);

  return (
    <div>
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
          สรุปผล
        </DialogTitle>
        <DialogContent dividers>
          {/* sec2 */}
          <h4>ผลการประเมินสภาวะสุขภาพ</h4>
          <h5> แปลผลเส้นรอบเอว </h5>
          <h6>{forms2Reducer.waistResult}</h6>
          <h5> แปลผลค่า BMI </h5>
          <h6>{forms2Reducer.bmiResult}</h6>
          <h5> แปลผลความดันโลหิต </h5>
          <h6>{forms2Reducer.bloodPressureResult}</h6>
          <h5> แปลผลการตรวจระดับน้ำตาล </h5>
          <h6>{forms2Reducer.sugarResult}</h6>
          <hr />
          {/* sec3 */}
          <h4>ผลการประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h4>
          <h6>{forms3Reducer.results}</h6>
          <hr />
          {/* sec4 */}
          <h4>ผลการประเมินสุขภาพตา</h4>
          <h6> {forms4Reducer.results} </h6>
          <hr />
          {/* sec5 */}
          <h4>ผลการประเมินสุขภาพช่องปาก</h4>
          <h6> {forms5Reducer.results} </h6>
          <hr />
          {/* sec6 */}
          <h4>ผลการประเมินความสามารถในการทำกิจวัตรประจำ</h4>
          <h6> {forms6Reducer.resultsTai} </h6>
          <hr />
          {/* sec7 */}
          <h4>ผลการประเมินภาวะสมองเสื่อม</h4>
          <h6> {forms7Reducer.results} </h6>
          <hr />
          {/* sec8 */}
          <h4>ผลการประเมินการคัดกรองโรคซึมเศร้า</h4>
          <h6> {forms8Reducer.results} </h6>
          <h6> {forms89qReducer.results} </h6>
          <hr />
          {/* sec9 */}
          <h4>ผลการประเมินสุขภาพกระดูกและกล้ามเนื้อ</h4>
          <h6> {forms9Reducer.result1} </h6>
          <h6> {forms9Reducer.result2} </h6>
          <h6> {forms92Reducer.results} </h6>
          <hr />
          {/* sec10 */}
          <h4>ผลการประเมินการคัดกรองการกลั้นปัสสาวะ</h4>
          <h6> {forms10Reducer.results} </h6>
        </DialogContent>
      </Dialog>
    </div>
  );
}
