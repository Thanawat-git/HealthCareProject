import React from "react";
import './superadmin.css'
import Header from "./HeaderSA";
import LeftSideBarMenu from "./LeftSideBarMenu";
import Content from "./content/content";
import Footer from "./Footer";

export default function SuperAdminPage() {
  return( 
  <React.Fragment>
    <div className="wrapper">
      <Header/>
      <LeftSideBarMenu/>
      <Content/>
      <Footer/>
    </div>
  </React.Fragment>
  );
}
