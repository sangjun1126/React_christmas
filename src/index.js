import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChristmasTree from "./ChristmasTree/ChristmasTree";
import Navigation from "./Navigation";
import Chatbot from "./Chatbot";
import WriteTree from "./WriteTree";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate to="/ChristmasTree" replace />} />
      <Route path="/ChristmasTree" element={<ChristmasTree />} />
      <Route path="/App" element={<App />} />
      <Route path="/Chatbot" element={<Chatbot />} />
      <Route path="/WriteTree" element={<WriteTree />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
