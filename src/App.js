import { StyledBigDiv, StyledCell, StyledH1, StyledLoseBtn, StyledDivContainer, StyledMiniHeader, StyledScore } from "./styles/boxes";
import "./App.css";
import { rightArrFunc, leftArrFunc, upArrFunc, downArrFunc, startArrFunc, isLoseFunc } from "./helper/helper";
import { useState, useEffect } from "react";

function App() {
  const [arr, setArr] = useState(startArrFunc());
  const [score, setScore] = useState(0);
  const isLose = isLoseFunc(arr);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        console.log("Up");
        const [newArr, sum] = upArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (event.key === "ArrowDown") {
        console.log("Down");
        const [newArr, sum] = downArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (event.key === "ArrowLeft") {
        console.log("Left");
        const [newArr, sum] = leftArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (event.key === "ArrowRight") {
        console.log("Right");
        const [newArr, sum] = rightArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [arr]);

  return (
    <StyledDivContainer>
      <StyledDivContainer style={{ widows: "450px" }}>
        {!isLose && <StyledH1>2048</StyledH1>}
        {isLose && <StyledH1>Game Over</StyledH1>}
        <StyledMiniHeader>
          <div>
            <StyledScore>Best : Coming Soon!</StyledScore>
            <StyledScore>Score : {score}</StyledScore>
          </div>
          <StyledLoseBtn
            onClick={() => {
              setArr(startArrFunc());
              setScore(0);
            }}
          >
            <i className="fa-solid fa-rotate-right fa-2xl" />
          </StyledLoseBtn>
        </StyledMiniHeader>
      </StyledDivContainer>
      <StyledBigDiv>
        {arr.map((item, index) => {
          if (item !== 0) {
            return (
              <StyledCell key={index} id={item.toString()}>
                {item}
              </StyledCell>
            );
          } else {
            return <StyledCell key={index} id={item.toString()}></StyledCell>;
          }
        })}
      </StyledBigDiv>
    </StyledDivContainer>
  );
}

export default App;
