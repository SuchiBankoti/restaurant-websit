import React from "react";
import { Link } from "react-router-dom";
import "./FinalPage.css";

const FinalPage = () => {
  return (
    <div className="final-page">
      <h1 className="thankyou">Thank-You!!</h1>
      <Link to={"/restaurant-websit"} className="link">
        <div className="continue">Continue Dining</div>
      </Link>
    </div>
  );
};

export default FinalPage;
