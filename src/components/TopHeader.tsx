import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="row border-bottom white-bg">
      <nav className="navbar navbar-expand-lg navbar-static-top">
        <Link className="navbar-brand" to="/">
          Income Analyzer
        </Link>
      </nav>
    </div>
  );
};

export default TopHeader;
