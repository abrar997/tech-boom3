import React from "react";
import { icons } from "../../constatns";

const footer = () => {
  return (
    <div className="flex">
      <div className="ms-auto flex flex-start">
        search
        <div />
      </div>
      <div className="me-auto flex flex-end">
        <div>
         <icons.MdOutlineDangerous /> 
        </div>
        <div><icons.FaCircle/></div>
        <div><icons.FaCircle/></div>
        <div><icons.FaCircle/></div>
       </div>
    </div>
  );
};

export default footer;
