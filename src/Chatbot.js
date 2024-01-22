import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const Chatbot = () => {
  const steps = [
    {
      id: "0",
      message: `천호 국비지원 수강생님! 안녕하세요~~
      저는 상담봇이에요`,
      trigger: "1",
    },
    {
      id: "1",
      message: `불편하신 점이나 궁금하신 점이 있으시다면
      언제든 답장 가능합니다`,
      trigger: "2",
    },
    {
      id: "2",
      options: [{ value: 1, label: "시작하기", trigger: "3" }],
    },
    {
      id: "3",
      message: `무슨 도움이 필요하신가요??`,
      trigger: "4",
    },
    {
      id: "4",
      component: (
        <div>
          <a>돌아가기</a>
          <a>연결하기</a>
        </div>
      ),
    },
    {
      id: "5",
      component: <div>이동</div>,
    },
  ];

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#EF6C00",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#F29F05",
    botFontColor: "#FFF",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <div>
      <h2 style={{ fontSize: "30px" }}>
        채팅을 이용하시려면 밑의 아이콘을 클릭해주세요 !
      </h2>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          hideHeader={true}
          placeholder={"채팅이 불가능한 채널입니다."}
          botAvatar={
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMDNfNzYg%2FMDAxNzAxNTc1MDY4MDE3.CpdKnNDR_X40fpiq8DWT-NyZ1ZYitGxXsWGW460uUWsg.uSKO7mPrDqE5vIZTxjOtRaMDhXoF1JATopJMbMIdKhAg.JPEG.dkxha204%2F300e0549c9f0a7c4a827f0bacc0dbfc8.jpg&type=sc960_832"
          }
          userAvatar={
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMDVfMjc3%2FMDAxNzAxNzczODQ2MjQx.u24lUI77tPN3a2SBnLt9bGTO7b_yoO5SnXIfAjtvgrYg.p3LTssJaorJjNrqPpQTRWezYQL8_SJyGBe0SiGi_q4og.JPEG.the_momen_t%2F1701773845056.jpg&type=sc960_832"
          }
          width={"400px"}
          bubbleOptionStyle={{ boxShadow: "none" }}
          floating={true}
        />
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;
