import React from "react";
import FormDetails from "../../components/Form";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          color: "#F6F643",
          textAlign: "left",
          marginLeft: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Link style={{ color: "#F6F643" }} to="/view-all-submission">
          View All Submission
        </Link>
      </div>
      <FormDetails />
    </div>
  );
};

export default LandingPage;
