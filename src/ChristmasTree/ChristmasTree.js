import React from "react";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ChristmasTree.css";
import Time from "./Time";

const ChristmasTree = () => {
  const imageUrl =
    "https://media.istockphoto.com/id/1144831131/ko/%EB%B2%A1%ED%84%B0/%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%ED%8A%B8%EB%A6%AC-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%9B%B9-%EC%95%A0%ED%94%8C-%EB%A6%AC-%EC%BC%80%EC%9D%B4-%EC%85%98-%EC%95%84%EC%9D%B4%EC%BD%98-%EA%B2%A8%EC%9A%B8%EC%9D%98-%EC%9A%94%EC%86%8C%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%AC%B8%EC%96%91-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B0%8F-%EA%B0%9C%EB%B0%9C%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%94%8C%EB%9E%AB-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%95%B1-%EA%B0%9C%EB%B0%9C.jpg?s=612x612&w=0&k=20&c=2bwJzHD_Vqd3vRDwpHzYoW9jD8tH0mpF_Mg90UvyG0o=";

  const navigate = useNavigate();

  const TreeDecorate = () => {
    navigate("/WriteTree");
  };

  const LikeTree = () => {
    alert("관심목록에 추가되었습니다!");
  };

  const GoToSurvey = () => {
    window.location.href =
      "https://docs.google.com/forms/d/1iKuFi_aEUJNapjQ2BYsf575M1jxQtTPEbV-WMXXri8E/edit";
  };

  return (
    <div className="tree-container" style={{ textAlign: "center" }}>
      <Time />
      <h2 style={{ fontSize: "30px" }}>내 트리를 꾸며줘</h2>
      <div className="tree-image" style={{ display: "inline-block" }}>
        <img
          src={imageUrl}
          alt="Christmas Tree"
          style={{ display: "block", margin: "0 auto" }}
        />
        <div className="button-container" style={{ textAlign: "center" }}>
          <button className="deco" onClick={TreeDecorate}>
            트리 꾸며주기
          </button>
          <button className="likeit" onClick={LikeTree}>
            <FontAwesomeIcon
              icon={faStar}
              className="star-icon"
              style={{ color: "orange" }}
            />
          </button>
          <br />
          <button className="survey" onClick={GoToSurvey}>
            설문조사 하러가기
          </button>
        </div>
      </div>
      <Snowfall snowflakeCount={500} />
    </div>
  );
};

export default ChristmasTree;
