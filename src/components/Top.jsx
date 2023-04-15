import React, { Component } from "react";

function Top() {
  return (
    <div className="top">
      <img className="top-img" src={require("./images/Rectangle 90.png")} />
      <h2 className="top-title">Laura Smith</h2>
      <h3 className="top-sub-title">Frontend Developer</h3>
      <h4 className="top-smtitle">laurasmith.website</h4>
      <div className="btns">
        <button className="emailBtn">
          <span>
            <img src={require("./images/email.png")} />
          </span>
          Email
        </button>
        <button className="linkedInBtn">
          <span>
            <img src={require("./images/linkedIn.png")} />
          </span>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
export default Top;
