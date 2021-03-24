import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const ConnectionAlert = path => {
  MySwal.fire("ขาดการเชื่อต่อ", "ไม่สามารถเชื่อต่อเซิร์ฟเวอร์ได้ กรุณาตรวจสอบ VPN", "question").then(
    (result) => {
      if (result.isConfirmed) {
        window.location.href = path
      }
    }
  );
};

export default ConnectionAlert;
