import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function AlertCustom2() {
  return (
    <Alert variant="filled" severity="warning">
      ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง
    </Alert>
  );
}
