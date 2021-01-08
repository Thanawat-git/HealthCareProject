import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function AlertCustom() {
  return (
    <Alert variant="filled" severity="error">
      สถานะการเข้าใช้งานของท่านถูกระงับ กรุณาติดต่อเจ้าหน้าที่
    </Alert>
  );
}
