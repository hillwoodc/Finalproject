import React from "react";
import "./Choice.css";

export const Choice = ({ children }) => {
  return (
    <div className="choice-overflow-container">
      <ul className="choice-group">
        {children}
      </ul>
    </div>
  );
};
