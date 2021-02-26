import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../../actions/editaccount.action";
import { Link,useHistory } from "react-router-dom";
import { blue, grey } from "@material-ui/core/colors";

export default function Profileadmin() {
  const dispatch = useDispatch();
  const editaccountReducer = useSelector(({ editaccountReducer }) => editaccountReducer);
  const { user } = useSelector((state) => state.authReducer);
  // const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);
  const [firstname, setFirstname] = React.useState(null);
  const [lastanme, setLastname] = useState(null);
  const [phone, setphone] = useState(null);

  React.useEffect(() => {
    console.log(editaccountReducer.firstname);
    setFirstname(editaccountReducer.firstname);
    setLastname(editaccountReducer.lastanme);
    setphone(editaccountReducer.phone);

  },[editaccountReducer.firstname]);
  // const uploadedImage = useState();
  // const imageUploader = useState();

  // const handleImageUpload = (e) => {
  //   const [file] = e.target.files;
  //   if (file) {
  //     const reader = new FileReader();
  //     const { current } = uploadedImage;
  //     current.file = file;
  //     reader.onload = (e) => {
  //       current.src = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  let history = useHistory();
  const handleClickOpen = () => {
    // setOpen(true);
    dispatch(formAction.updateVolunteer(
      [user, firstname, lastanme, phone]
    ));
    history.goBack();
  };
  
  // const handleSubmit = ()=>{
  //   const data = [imageUploader
  //   ]
  //   dispatch(formAction.add(data))
  // }

  return (
    <div className="vtcontainer" style={{ minHeight: "100%" }}>
      <div className="nav-vtcontainer linkicon edit-pass-pc">
        <h3>
          <b> แก้ไขข้อมูลส่วนตัว </b>
        </h3>
        {/* <div style={{ textAlign: "center" }}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={handleImageUpload}
            ref={imageUploader}
          />

          <label htmlFor="icon-button-file">
            <Avatar
              color="primary"
              aria-label="upload picture"
              component="span"
              style={{ width: 90, height: 90 }}
            >
              <PhotoCamera
                style={{ fontSize: 40 }}
                onClick={() => imageUploader.current.click()}
              />
              <img
                ref={uploadedImage}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
            </Avatar>
          </label>
        </div> */}

        <div className="TextField">
            <TextField
              id="firstname"
              value={firstname}
              label="ชื่อ"
              variant="outlined"             
              onChange={(e)=>setFirstname(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
            <TextField
              id="lastanme"
              value={lastanme}
              label="นามสกุล"
              variant="outlined"
              onChange={(e) => setLastname(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
          <TextField
            id="phone"
            label="เบอร์โทรศัพท์"
            variant="outlined"
            value={phone}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setphone(e.target.value)}
            fullWidth
          />
        </div>

        <div className="bt-edit">
          {/* <Link to="/volunteerpage/search"> */}
          <Button
            style={{
              backgroundColor: blue[500],
              color: grey[50],
              margin: 20,
              height: 40,
              width: 90,
            }}
            onClick={handleClickOpen}
          >
            บันทึก
          </Button>
          {/* </Link> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}
