import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const RedirectToVolunteerPage = () => {
  MySwal.fire("The Internet?", "That thing is still around?", "question").then(res=>{
    //   <Link to="/mainmenu"></Link>
  });
};
