import React from "react";

export const LoaderCustom = () => {
  const styleObj = {
    height: "100vh",
    width: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Loader div
  return (
    <div style={styleObj}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
