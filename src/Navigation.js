import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/ChristmasTree" className="text-white mr-4">
          메인화면
        </Link>
        <Link to="/App" className="text-white mr-4">
          YouTube
        </Link>
        <Link to="/Chatbot" className="text-white mr-4">
          심심이
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
