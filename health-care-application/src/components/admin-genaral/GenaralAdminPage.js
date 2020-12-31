import React, { useEffect } from "react";
import Header from "../admin-super/HeaderSA";
import LeftSideBarMenu from "../admin-super/LeftSideBarMenu";
import Content from "../admin-super/content/content";
import Footer from "../admin-super/Footer";
import { useSelector } from "react-redux";

export default function GenaralAdminPage() {
  const user = useSelector(({authReducer}) => authReducer.user);
  useEffect(() => {
    console.log(user.Fullname)
  }, [])
  return( 
  <React.Fragment>
    <div className="wrapper">
      <Header name={user.Fullname} />
      <LeftSideBarMenu/>
      <Content/>
      <Footer/>
    </div>
  </React.Fragment>
  );
}