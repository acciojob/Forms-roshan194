import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
};

export default Card;
