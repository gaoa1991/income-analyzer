import React from "react";

import SelfEmploymentSection from "./SelfEmploymentSection";

const HomePage: React.FC = () => {
  return (
    <div className="wrapper wrapper-content">
      <div className="row">
        <div className="col-lg-12">
          <SelfEmploymentSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
