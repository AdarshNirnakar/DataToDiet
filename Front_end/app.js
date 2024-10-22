import React from "react";
import ReactDom from "react-dom/client";
import HomePage from "./src/HomePage";
import './index.css';





const Addd = () => {
  return (
    <div>
      <HomePage/>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Addd />);
