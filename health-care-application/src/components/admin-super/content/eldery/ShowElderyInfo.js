import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { blue, red, grey } from "@material-ui/core/colors";
import RoomSharpIcon from "@material-ui/icons/RoomSharp";
import RecentActorsSharpIcon from "@material-ui/icons/RecentActorsSharp";
import moment from "moment";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NoDataImg from '../../../images/no_data.svg'
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
          ข้อมูลของคุณ {data.ELD_FIRSTNAME} {data.ELD_LASTNAME}
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
           <Relative1 data={data} />             
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.root}>
            <Relative2 data={data} />
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.root}>
            <CongenitalDisease data={data} />
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
      <div>
        <h5 style={{ textAlign: "center" }}>
          <b>รหัสประจำตัว &nbsp;&nbsp; {data.ELD_ID_NUMBER}</b>
        </h5>
      </div>
      {/* ------------------------ */}
      <br/>
      <div className="row">
        <div className="col-6 basic-info-title" style={{ paddingRight:0 }}>
          <h5>ชื่อ - นามสกุล :</h5> <hr />
          <h5>วันเกิด :</h5> <hr />
          <h5>อายุ :</h5> <hr />
          <h5>เพศ :</h5> <hr />
          <h5>สถานะ :</h5> <hr />
          <h5>เบอร์โทรศัพท์ :</h5> <hr />
          <h5>ศาสนา :</h5> <hr />
          <h5>อาชีพ :</h5> <hr />
          <h5>เงินเดือน :</h5> <hr />
          <h5>การศึกษา :</h5> <hr />
          <h5>สิทธิการรักษา :</h5> <hr />
          <h5>การเป็นอยู่ :</h5>
        </div>
        <div className="col-6 align-self-start" style={{ paddingLeft:0 }}>
          <h5>
          {data.Elder_Information.ELD_GENDER === "ชาย"
            ? "นาย"
            : data.Elder_Information.ELD_STATUS === "โสด"
            ? "นางสาว"
            : "นาง"}
          {data.ELD_FIRSTNAME} {data.ELD_LASTNAME}
          </h5>
         <hr />
         <h5>วัน{moment(data.Elder_Information.ELD_BIRTHDATE).format("dddd")} ที่ {moment(data.Elder_Information.ELD_BIRTHDATE).format("LL")}</h5> <hr/>
         <h5>{data.Elder_Information.ELD_GENDER}</h5> <hr/>
         <h5>{data.Elder_Information.ELD_AGE} ปี</h5> <hr/>
         <h5>{data.Elder_Information.ELD_STATUS}</h5> <hr/>
         <h5>{data.ELD_PHONE}</h5> <hr/>
         <h5>{data.Elder_Information.ELD_RELIGION}</h5> <hr/>
         <h5>{data.Elder_Information.ELD_JOB}</h5> <hr/>
         <h5>{data.Elder_Information.ELD_INCOME} บาท</h5> <hr/>
         <h5>{data.Elder_Information.ELD_EDUCATION}</h5> <hr/>
         <h5>
            {data.Elder_Information.ELD_TREATMENT}{" "}
            {data.Elder_Information.ELD_TREATMENT_HOSPITAL !== null && `โรงพยาบาล${data.Elder_Information.ELD_TREATMENT_HOSPITAL}`}
          </h5> <hr/>
          <h5>
          {
            data.Elder_Information.ELD_LIVELIHOOD === "ไม่ได้อยู่ลำพัง" ? `ไม่ได้อยู่ลำพัง อยู่กับ ${data.Elder_Information.ELD_LIVELIHOOD_NEIGHBOR_NAME}`
            : data.Elder_Information.ELD_LIVELIHOOD_DETAIL === "ทั้งกลางวันและกลางคืน" ? `${data.Elder_Information.ELD_LIVELIHOOD} ${data.Elder_Information.ELD_LIVELIHOOD_DETAIL}` 
            : data.Elder_Information.ELD_LIVELIHOOD_DETAIL === "กลางวัน" ? (
              <React.Fragment>
                {data.Elder_Information.ELD_LIVELIHOOD} {data.Elder_Information.ELD_LIVELIHOOD_DETAIL} <br/>
                กลางคืนอยู่กับ {data.Elder_Information.ELD_LIVELIHOOD_NEIGHBOR_NAME}
              </React.Fragment>
            )
            : (
              <React.Fragment>
                {data.Elder_Information.ELD_LIVELIHOOD} {data.Elder_Information.ELD_LIVELIHOOD_DETAIL} <br/>
                กลางวันอยู่กับ {data.Elder_Information.ELD_LIVELIHOOD_NEIGHBOR_NAME}
              </React.Fragment>
            )
          }
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
      <h5 style={{ marginTop: "3%" }}>
        <RoomSharpIcon style={{ color: red[500] }} />{" "}
        <strong>ที่อยู่ปัจจุบัน</strong>
      </h5>
      <div className="address-info">
        <p style={{ fontSize: 20, margin: 20 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เลขที่ :&nbsp; {ELD_CUR_NUMBER}{" "}
          &nbsp;ตรอก/ซอย :&nbsp; {ELD_CUR_ALLEY} &nbsp;ถนน :&nbsp; {ELD_CUR_STREET}{" "}
          {ELD_CUR_AREA} &nbsp;ตำบล :&nbsp; {ELD_CUR_SUB_DISTRICT} &nbsp;
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;อำเภอเมือง จังหวัดชลบุรี
        </p>
      </div>
      <h5 style={{ marginTop: "5%" }}>
        <strong>
          <RoomSharpIcon style={{ color: red[600] }} />
          ที่อยู่ตามบัตรประชาชน
        </strong>
      </h5>
      <div className="address-info">
        <p style={{ fontSize: 20, margin: 20 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เลขที่&nbsp; {ELD_IDN_ADDR_NUMBER}{" "}
          &nbsp;ตรอก/ซอย&nbsp; {ELD_IDN_ADDR_ALLEY} &nbsp;ถนน&nbsp;{" "}
          {ELD_IDN_ADDR_STREET} &nbsp; {ELD_IDN_ADDR_AREA} &nbsp;ตำบล&nbsp;
          {ELD_IDN_ADDR_SUB_DISTRICT} &nbsp;
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;อำเภอเมือง จังหวัดชลบุรี
        </p>
      </div>
    </React.Fragment>
  );
}

function Relative1({ data }) {
  const {
    ELDER_RELATIVE
  } = data;

  return (
    <React.Fragment>
      {(ELDER_RELATIVE.length !== 0 && ELDER_RELATIVE[0].ELD_REL_FIRSTNAME !== null )  ?
      <React.Fragment>
      <h5 style={{ marginLeft: "7%" }}>
        <RecentActorsSharpIcon style={{ color: grey[500], fontSize: 40 }} />
        &nbsp;<strong>ข้อมูลญาติคนที่ 1</strong>
      </h5>
      <div style={{ marginLeft: "17%", fontSize: 20 }}>
        <p>
          ชื่อ-นามสกุล : &nbsp;{ELDER_RELATIVE[0].ELD_REL_FIRSTNAME} &nbsp; {ELDER_RELATIVE[0].ELD_REL_LASTNAME}
        </p>
        <p>เพศ : &nbsp;{ELDER_RELATIVE[0].ELD_REL_GENDER} </p>
        <p>เวลาอยู่กับผู้สูงอายุ : &nbsp;{ELDER_RELATIVE[0].ELD_REL_TIME}</p>
        <p>ความสัมพันธ์กับผู้สูงอายุ : &nbsp;{ELDER_RELATIVE[0].ELD_REL_RELATION}</p>
        <p>เบอร์โทรศัพท์ : &nbsp;{ELDER_RELATIVE[0].ELD_REL_PHONE}</p>
      </div>
      </React.Fragment>
      :<p style={{fontSize: 20 }}>ไม่มีข้อมูลญาติ</p>
      }
    </React.Fragment>
  );
}
function Relative2({ data }) {
  const {
    ELDER_RELATIVE
  } = data;

  return (
    <React.Fragment>
      {ELDER_RELATIVE.length > 1 ?
      <React.Fragment> 
      <h5 style={{ marginLeft: "7%" }}>
        <RecentActorsSharpIcon style={{ color: grey[500], fontSize: 40 }} />
        &nbsp;<strong>ข้อมูลญาติคนที่ 2</strong>
      </h5>
      <div style={{ marginLeft: "17%", fontSize: 20 }}>
        <p>
          ชื่อ-นามสกุล : &nbsp;{ELDER_RELATIVE[1].ELD_REL_FIRSTNAME} &nbsp; {ELDER_RELATIVE[1].ELD_REL_LASTNAME}
        </p>
        <p>เพศ : &nbsp;{ELDER_RELATIVE[1].ELD_REL_GENDER} </p>
        <p>เวลาอยู่กับผู้สูงอายุ : &nbsp;{ELDER_RELATIVE[1].ELD_REL_TIME}</p>
        <p>ความสัมพันธ์กับผู้สูงอายุ : &nbsp;{ELDER_RELATIVE[1].ELD_REL_RELATION}</p>
        <p>เบอร์โทรศัพท์ : &nbsp;{ELDER_RELATIVE[1].ELD_REL_PHONE}</p>
      </div>
      </React.Fragment> 
      : 
      <div className="row justify-content-center nodata-display">
        <div className="col align-self-start">
          {/* One of three columns */}
        </div>
        <div className="col align-self-center">
          <img src={NoDataImg} className="nodata-img" alt=""/>
          <span>ไม่พบข้อมูล</span>
        </div>
        <div className="col align-self-end">
          {/* One of three columns */}
        </div>
      </div>
    
}
    </React.Fragment>
  );
}

function CongenitalDisease({ data }) {
  const { FOOD, DRUG, DISEASE } = data;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-4">
          <h5 style={{ marginTop: "3%" }}>
            <strong>ประวัติการแพ้อาหาร</strong>
          </h5>
          {FOOD.length !== 0 ?
            FOOD.map((value) => {
              return (
                <React.Fragment>
                  <li style={{ marginLeft: "6%", fontSize: 20 }}>
                    {value.FOOD_NAME}
                  </li>
                </React.Fragment>
              );
            }):<p style={{fontSize: 18,marginLeft:"6%" }}>ไม่มี</p>}
        </div>
        <div className="col-4">
          <h5 style={{ marginTop: "3%" }}>
            <strong>ประวัติการแพ้ยา</strong>
          </h5>
          {DRUG.length !== 0 ? 
            DRUG.map((value, index) => {
              return (
                <React.Fragment>
                  <li key={index} style={{ marginLeft: "6%", fontSize: 20 }}>
                    {value.DRUG_NAME}
                  </li>
                </React.Fragment>
              );
            }):<p style={{fontSize: 18,marginLeft:"6%" }}>ไม่มี</p>}
        </div>
        <div className="col-4">
          <h5 style={{ marginTop: "3%" }}>
            <strong>โรคประจำตัว</strong>
          </h5>
          {DISEASE.length !== 0 ?
            DISEASE.map((value) => {
              return (
                <React.Fragment>
                  <li style={{ marginLeft: "6%", fontSize: 20 }}>
                    {value.DIS_NAME}
                  </li>
                </React.Fragment>
              );
            }):<p style={{fontSize: 18,marginLeft:"6%" }}>ไม่มี</p>}
        </div>
      </div>
    </React.Fragment>
  );
}
