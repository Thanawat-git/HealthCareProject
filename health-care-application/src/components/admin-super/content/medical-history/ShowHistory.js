import moment from "moment";
import React, { useEffect, useState } from "react";
import * as historyAction from "../../../../actions/history.action";
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
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "moment/locale/th";

moment.locale("th");
let noResult = "ไม่มีผลการประเมิน"
let noData = "ไม่มีข้อมูล"

export default function ShowHistory({ value }) {
  const dispatch = useDispatch();
  const historyReducer = useSelector(({ historyReducer }) => historyReducer);
  const [open, setOpen] = useState(false);
  const [openAll, setopenAll] = useState(false)
  const [openState, setopenState] = useState({
    open1:false,open2:false,open3:false,open4:false,open5:false,open6:false,open7:false,open8:false,open9:false,
  })
  const {open1,open2,open3,open4,open5,open6,open7,open8,open9} = openState

  const handleClick = (name,value) => {
    // console.log('event.target.value ',value)
    setopenState({ ...openState, [name]: !value })
  }
  
  useEffect(() => {
    setopenState({
      open1:openAll,open2:openAll,open3:openAll,
      open4:openAll,open5:openAll,open6:openAll,
      open7:openAll,open8:openAll,open9:openAll
    })
  }, [openAll])
  const selectHistory = (id) => {
    dispatch(historyAction.getHistorySelected(id))
      setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const historyShow = ()=>{
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
    } = historyReducer.resultSelected
    if(historyReducer.isError===false) {
      return (
        <React.Fragment>
        <Accordion expanded={open1} onClick={()=>handleClick("open1",open1)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>ข้อมูลสุขภาพทั่วไป</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              <p>
                ความยาวเส้นรอบเอว: 
                {waist_waist?
                <React.Fragment>
                  <strong> {waist_waist} </strong>ซม.
                  ผลการประเมิน <strong> {waist_result} </strong>
                </React.Fragment>
                :<strong> {noData} </strong>}
                
              </p>
              <p>
                น้ำหนัก: 
                {bmi_weight?
                <React.Fragment>
                  <strong> {bmi_weight} </strong>ซม.
                </React.Fragment>
                :<strong> {noData} </strong>}
              </p>
              <p>
                ส่วนสูง:
                {bmi_height?
                <React.Fragment>
                  <strong> {bmi_height} </strong>ซม.
                </React.Fragment>
                :<strong> {noData} </strong>} 
              </p>
              <p>
                ดัชนีมวลการ(BMI): 
                {bmi_bmi?
                <React.Fragment>
                  <strong> {bmi_bmi} </strong>ซม.
                  ผลการประเมิน <strong> {bmi_bmi} </strong>
                </React.Fragment>
                :<strong> {noData} </strong>}
              </p>
              <p>
                ชีพจร: 
                {bp_pulse?
                <React.Fragment>
                  <strong> {bp_pulse} </strong>ครั้ง/นาที
                </React.Fragment>
                :<strong> {noData} </strong>} 
              </p>
              <p>
                ความดันโลหิต:
                {bp_sys?
                <React.Fragment>
                  <strong> {bp_sys}/{bp_dia} </strong>มม.ปรอท
                  ผลการประเมินความดันโลหิต: <strong> {bp_result} </strong>
                </React.Fragment>
                :<strong> {noData} </strong>}
              </p>
              <p>
              การประเมินระดับน้ำตาลจากปลายนิ้ว
              {bp_sys?
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
                :<strong> {noData} </strong>}
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด */}
        <Accordion expanded={open2} onClick={()=>handleClick("open2",open2)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>แบบประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {cardio_result!==null ? cardio_result:noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบคัดกรองสุขภาพตา */}
        <Accordion expanded={open3} onClick={()=>handleClick("open3",open3)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions3-header"
          >
            <Typography>แบบคัดกรองสุขภาพตา</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {eye_result!==null ? eye_result:noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบประเมินสุขภาพช่องปาก */}
        <Accordion expanded={open4} onClick={()=>handleClick("open4",open4)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions4-header"
          >
            <Typography>แบบประเมินสุขภาพช่องปาก</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {oral_result!==null ? oral_result:noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบประเมินสมรรถนะ, abi_group, TAI */}
        <Accordion expanded={open5} onClick={()=>handleClick("open5",open5)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions5-header"
          >
            <Typography>แบบประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {abi_group!==null ? `ผู้สูงอายุอยู่กลุ่ม ${abi_group}`:noResult} </strong>
              {
              abi_group!="1" && <React.Fragment>
                  <p> ผลการประเมิน TAI {" "}
                  {tai_group!==null? <strong>ผู้สูงอายุอยู่กลุ่ม {tai_group}</strong>:noResult}
                  </p>
              </React.Fragment>
              }
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบประเมินภาวะสมองเสื่อม, mmse_result */}
        <Accordion expanded={open6} onClick={()=>handleClick("open6",open6)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions6-header"
          >
            <Typography>แบบประเมินภาวะสมองเสื่อม</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {alz_result!==null ? `${alz_result}`:noResult} </strong>
              {
              alz_result!="ผิดปกติ" && <React.Fragment>
                {mmse_result!==null? <p>
                    ผลการประเมิน MMSE-Thai 2002: <strong>{mmse_result}</strong>
                </p>:noResult}
              </React.Fragment>
              }
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบคัดกรองโรคซึมเศร้า, dep_result, 9q */}
        <Accordion expanded={open7} onClick={()=>handleClick("open7",open7)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions7-header"
          >
            <Typography>แบบคัดกรองโรคซึมเศร้า</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {dep_result!==null ? <React.Fragment>
                  {
                    dep_result!="ปกติ"&& dep_9q_result
                  }
              </React.Fragment>:noResult} </strong>
              
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบประเมินสุขภาพกระดูกและกล้ามเนื้อ ข้อเข่าเสื่อม */}
        <Accordion expanded={open8} onClick={()=>handleClick("open8",open8)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions8-header"
          >
            <Typography>แบบประเมินสุขภาพกระดูกและกล้ามเนื้อ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมินความเสี่ยงต่อการพลัดตกหกล้ม: <strong> ผู้สูงอายุ{bone_walk!==null ? <React.Fragment>
                  {
                    bone_walk=="เดินไม่ได้"? bone_result : `${bone_walk} ${bone_result}`
                  }
              </React.Fragment>:noResult} </strong>
              <br/><br/>
              ผลการประเมินโรคข้อเข่าเสื่อม
              <p>
                ตอนที่ 1 ระดับความเจ็บปวดของข้อเข่า: {" "}
                  {ost_1_result=="ไม่มีอาการปวดเข่า"? "ผู้สูงอายุไม่มีอาการปวดเข่า"
                  :<React.Fragment>
                      ผู้สูงอายุมีอาการปวดเข่าที่ระดับ {ost_1_result? <React.Fragment> <strong>{ost_1_result}</strong> จาก 10</React.Fragment>:<strong>{noResult}</strong>} 
                  </React.Fragment> 
                  }
              </p>
              <p>
                ตอนที่ 2 การคัดกรองข้อเข่าเสื่อมทางคลินิก: {" "}
                  {ost_2_result!==null? <strong>{ost_2_result}</strong>
                  :<strong>{noResult}</strong>
                  }
              </p>
              ตอนที่ 3 แบบประเมินระดับความรุนแรงของโรคข้อเข่าเสื่อม (Oxford Knee Score) 
              <p>
              ผลการประเมิน:{" "}
                  {ost_3_result!==null? <strong>{ost_3_result}</strong>
                  :<strong>{noResult}</strong>
                  }
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* แบบคัดกรองการกลั้นปัสสาวะ */}
        <Accordion expanded={open9} onClick={()=>handleClick("open9",open9)}> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions9-header"
          >
            <Typography>แบบคัดกรองการกลั้นปัสสาวะ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              ผลการประเมิน <strong> {uri_result!==null ? uri_result:noResult} </strong>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </React.Fragment>
      )
    } else {
     return <Typography style={{ textAlign: "center" }} color="textSecondary">ไม่สามารถดูข้อมูลได้</Typography>
    }
    
  }

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => selectHistory(value.VIS_ID)}
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
          ข้อมููลการตรวจสุขภาพของคุณ {value.ELD_NAME}{" "}
          {/* {moment(value.VIS_DATE).format("LLLL")} */}
          วัน{moment(value.VIS_DATE).format("dddd")} ที่ {moment(value.VIS_DATE).format("LL")}
        </DialogTitle>
        <DialogContent dividers="paper">
          <Grid container justify="flex-end">
            <FormControlLabel
                control={
                  <Switch
                    checked={openAll}
                    onChange={(event)=>setopenAll(event.target.checked)}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="ดูทั้งหมด"
              />
          </Grid>
          <DialogContentText>
            {/* Accordion */}
            {historyShow()}
            {/* Accordion */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" style={{ marginRight: 30 }} >
            ปิด
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
