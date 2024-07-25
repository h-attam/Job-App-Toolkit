import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button className="submit-btn">
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span>{text}</span>
    </button>
  );
};

export default SubmitButton;
