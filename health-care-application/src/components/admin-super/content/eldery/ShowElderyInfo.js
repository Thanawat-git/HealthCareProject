import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "moment/locale/th";

// use css from content.css

moment.locale("th");

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 400,
    //   backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShowElderyInfo({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setOpen(true)}
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
        // className={classes.root}
      >
        <DialogTitle id="scroll-dialog-title" style={{ textAlign: "center" }}>
          ข้อมููลของคุณ {data.ELD_FIRSTNAME} {data.ELD_LASTNAME}
        </DialogTitle>
        <DialogContent>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="ข้อมูลทั่วไป" {...a11yProps(0)} />
              <Tab label="ที่อยู่" {...a11yProps(1)} />
              <Tab label="ข้อมูลญาติคนที่1" {...a11yProps(2)} />
              <Tab label="ข้อมูลญาติคนที่2" {...a11yProps(3)} />
              <Tab label="การแพ้/โรคประจำตัว" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.root}>
            <BasicInfo data={data} />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.root}>
            <Address data={data} />
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.root}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.root}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.root}>
            Item Five
          </TabPanel>
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

function BasicInfo({ data }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4 btitle">
          <h5>ชื่อ - นามสกุล</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>
            {data.Elder_Information.ELD_GENDER === "ชาย"
              ? "นาย"
              : data.Elder_Information.ELD_STATUS === "โสด"
              ? "นางสาว"
              : "นาง"}
            {data.ELD_FIRSTNAME} {data.ELD_LASTNAME}
          </h5>
        </div>
        <div className="col-4 btitle">
          <h5>รหัสประจำตัว</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.ELD_ID_NUMBER}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>วันเกิด</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>
            วัน{moment(data.Elder_Information.ELD_BIRTHDATE).format("dddd")} ที่{" "}
            {moment(data.Elder_Information.ELD_BIRTHDATE).format("LL")}
          </h5>
        </div>
        <div className="col-4 btitle">
          <h5>อายุ</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.Elder_Information.ELD_AGE} ปี</h5>
        </div>
        <div className="col-4 btitle">
          <h5>เพศ</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.Elder_Information.ELD_GENDER}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>สถานะ</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.Elder_Information.ELD_STATUS}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>เบอร์โทรศัพท์</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.ELD_PHONE}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>ศาสนา</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.Elder_Information.ELD_RELIGION}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>อาชีพ</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.Elder_Information.ELD_JOB}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>การศึกษา</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>{data.Elder_Information.ELD_EDUCATION}</h5>
        </div>
        <div className="col-4 btitle">
          <h5>สิทธิการรักษา</h5>
        </div>
        <div className="col-8 bcontent">
          <h5>
            {data.Elder_Information.ELD_TREATMENT}{" "}
            {data.Elder_Information.ELD_TREATMENT_HOSPITAL !== null &&
              `โรงพยาบาล${data.Elder_Information.ELD_TREATMENT_HOSPITAL}`}
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
}

function Address({ data }) {
  const {
    ELD_IDN_ADDR_NUMBER,
    ELD_IDN_ADDR_ALLEY,
    ELD_IDN_ADDR_STREET,
    ELD_IDN_ADDR_SUB_DISTRICT,
    ELD_IDN_ADDR_AREA,
  } = data.Elder_Id_Number_Address;
  const {
    ELD_CUR_NUMBER,
      ELD_CUR_ALLEY,
      ELD_CUR_STREET,
      ELD_CUR_SUB_DISTRICT,
      ELD_CUR_AREA,
  } = data.Elder_Current_Address;
  return (
    <React.Fragment>
      <h5>ที่อยู่ปัจจุบัน</h5>
      <div className="address-info">
        <p>
            เลขที่ {ELD_CUR_NUMBER} ตรอก/ซอย {ELD_CUR_ALLEY} ถนน {ELD_CUR_STREET} {ELD_CUR_AREA} ตำบล{ELD_CUR_SUB_DISTRICT} อำเภอเมือง จังหวัดชลบุรี
        </p>
      </div>
      <h5>ที่อยู่ตามบัตรประชาชน</h5>
      <div className="address-info">
        <p>
            เลขที่ {ELD_IDN_ADDR_NUMBER} ตรอก/ซอย {ELD_IDN_ADDR_ALLEY} ถนน {ELD_IDN_ADDR_STREET} {ELD_IDN_ADDR_AREA} ตำบล{ELD_IDN_ADDR_SUB_DISTRICT} อำเภอเมือง จังหวัดชลบุรี
        </p>
      </div>
    </React.Fragment>
  );
}

function Relative1({ data }) {
  const {
    ELD_REL_FIRSTNAME,
    ELD_REL_LASTNAME,
    ELD_REL_GENDER,
    ELD_REL_TIME,
    ELD_REL_RELATION,
    ELD_REL_PHONE,
  } = data.Elder_Relative
   return (
     <React.Fragment>

     </React.Fragment>
   )
}

function CongenitalDisease({ data }) {
  const {
    DRUG,
    FOOD,
    DISEASE,
  } = data
   return (
     <React.Fragment>
       
     </React.Fragment>
   )
}