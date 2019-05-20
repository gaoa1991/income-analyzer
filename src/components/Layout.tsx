import React from "react";
import Footer from "./Footer";
import TopHeader from "./TopHeader";

const Layout: React.FC = props => (
  <div id="page-wrapper" className="gray-bg">
    <TopHeader />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
