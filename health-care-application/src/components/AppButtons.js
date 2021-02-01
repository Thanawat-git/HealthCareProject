import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SELECT_SECTION } from "../constants";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export function CancelBT() {
  const selectFormSection = useSelector(
    ({ selectFormSection }) => selectFormSection
  );
  const dispatch = useDispatch();
  const setSection = () => {
    dispatch({
      type: SELECT_SECTION,
      payload: "mainmenu",
    });
  };
  return (
    <div>
      {selectFormSection.section === "mainmenu" ? (
        <Link to="/mainmenu">
          <button type="button" className="btn form-btn btn-back btn-lg">
            ยกเลิก
          </button>
        </Link>
      ) : (
        <Link>
          <button
            type="button"
            className="btn form-btn btn-back btn-lg"
            onClick={setSection}
          >
            ยกเลิก
          </button>
        </Link>
      )}
    </div>
  );
}

// ไม่ได้ใช้ เพราะยังหาวิธีใช้ onclick จาก components อื่นไม่ได้ แต่เก็บไว้ก่อน เผื่อใช้
export function SaveBt() {
  return (
    <div>
      <button type="button" className="btn form-btn btn-primary btn-lg">
        บันทึก
      </button>
    </div>
  );
}

export function BackToMainmenuBT() {
  const classes = useStyles();
  const selectFormSection = useSelector(
    ({ selectFormSection }) => selectFormSection
  );
  const dispatch = useDispatch();
  const setSection = () => {
    dispatch({
      type: SELECT_SECTION,
      payload: "mainmenu",
    });
  };
  return (
    <div>
      {selectFormSection.section === "mainmenu" ? (
        <Link to="/mainmenu" className={classes.root}>
          <Button variant="primary" block>
            กลับสู่หน้าเมนูหลัก
          </Button>
        </Link>
      ) : (
        <Link className={classes.root}>
          <Button variant="primary" block onClick={setSection}>
            กลับสู่หน้าเมนูหลัก
          </Button>
        </Link>
      )}
    </div>
  );
}

export function BackFollow() {
  const classes = useStyles();
  const selectFormSection = useSelector(
    ({ selectFormSection }) => selectFormSection
  );
  const dispatch = useDispatch();
  const setSection = () => {
    dispatch({
      type: SELECT_SECTION,
      payload: "followupmenu",
    });
  };
  return (
    <div>
      {selectFormSection.section === "mainmenu" ? (
        <Link to="/followupmenu" className={classes.root}>
          <Button variant="primary" block>
            กลับสู่หน้าเมนูหลัก
          </Button>
        </Link>
      ) : (
        <Link className={classes.root}>
          <Button variant="primary" block onClick={setSection}>
            กลับสู่หน้าเมนูหลัก
          </Button>
        </Link>
      )}
    </div>
  );
}