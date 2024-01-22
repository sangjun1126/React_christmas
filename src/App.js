import React, { useEffect, useRef } from "react";
import "./App.css";
import YouTube from "react-youtube";

function App() {
  const players = useRef([]);

  useEffect(() => {
    players.current.forEach((player) => {
      player.unMute();
      player.pauseVideo();
    });
  }, []);

  const onReady = (event) => {
    event.target.mute();
    players.current.push(event.target);
  };

  return (
    <div className="App">
      <div className="video-wrapper">
        <YouTube
          videoId="xp5fdtEJOt4"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "xp5fdtEJOt4",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="dMzq46FhLWM"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "dMzq46FhLWM",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="3ENifYzsWHM"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "3ENifYzsWHM",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="A6xXqZFexBU"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "A6xXqZFexBU",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="IyeMw9GQUNI"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "IyeMw9GQUNI",
            },
          }}
          onReady={onReady}
        />
        <YouTube
          videoId="UUs6mKeVPk8"
          opts={{
            width: "100%",
            height: "270px",
            playerVars: {
              autoplay: 0, // 처음에 꺼져있는 상태
              modestbranding: 1,
              loop: 1,
              playlist: "UUs6mKeVPk8",
            },
          }}
          onReady={onReady}
        />
      </div>
    </div>
  );
}

export default App;
