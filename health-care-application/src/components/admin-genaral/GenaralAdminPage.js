import React from "react";
import Header from "../admin-super/HeaderSA";
import LeftSideBarMenu from "./LeftSideBarMenu";
import Content from "../admin-super/content/content";
import Footer from "../admin-super/Footer";

export default function SuperAdminPage() {
  return( 
  <React.Fragment>
    <div className="wrapper">
      <Header name="Genaral Admin Name" />
      <LeftSideBarMenu/>
      <Content/>
      <Footer/>
    </div>
  </React.Fragment>
  );
}