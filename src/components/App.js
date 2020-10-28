import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const keyPressHandler = (event) => {
    // keyRight
    const keyCode = event.keyCode;
    //console.log(event.keyCode);
    var ballPositionCopy = { ...ballPosition };
    if (keyCode === 39) {
      let xCopy = x + 5;
      //console.log(xCopy);
      ballPositionCopy.left = xCopy + "px";
      setX(xCopy);
    } else if (keyCode === 40) {
      // KeyDown
      let yCopy = y + 5;
      //console.log(yCopy);
      ballPositionCopy.top = yCopy + "px";
      setY(yCopy);
    } else if (keyCode === 38) {
      //Keyup
      let yCopy = y - 5;
      //console.log(yCopy);
      ballPositionCopy.top = yCopy + "px";
      setY(yCopy);
    } else if (keyCode === 37) {
      // kyeLeft
      let xCopy = x - 5;
      //console.log(xCopy);
      ballPositionCopy.left = xCopy + "px";
      setX(xCopy);
    }
    //console.log("is caleld");
    setBallPosition(ballPositionCopy);
  };
  React.useEffect(() => {
    document.addEventListener("keydown", keyPressHandler); // what if callback function is a arrowFunction
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  }, [ballPosition]);
  const start = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
