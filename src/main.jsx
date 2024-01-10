import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
//import Home from "./Day-1-jsx/Home.jsx";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Home /> */}
    <App />
    <ToastContainer />
  </React.StrictMode>
);
