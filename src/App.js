import { StyledBigDiv, StyledCell, StyledH1, StyledLoseBtn, StyledDivContainer, StyledMiniHeader, StyledScore } from "./styles/boxes";
import "./App.css";
import { rightArrFunc, leftArrFunc, upArrFunc, downArrFunc, startArrFunc, isLoseFunc } from "./helper/helper";
import { useState, useEffect } from "react";

function App() {
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("currentArr")) || startArrFunc());
  const [score, setScore] = useState(JSON.parse(localStorage.getItem("currentScore")) || 0);
  const [best, setBest] = useState(JSON.parse(localStorage.getItem("score")) || 0);
  const isLose = isLoseFunc(arr);

  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart({ x: event.touches[0].clientX, y: event.touches[0].clientY });
  };

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevent scrolling while swiping
  };

  const handleTouchEnd = (event) => {
    const touchEnd = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;
    const minSwipeDistance = 50; // Minimum swipe distance in pixels

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        setSwipeDirection(deltaX > 0 ? "right" : "left");
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        setSwipeDirection(deltaY > 0 ? "down" : "up");
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || swipeDirection === "up") {
        console.log("Up");
        const [newArr, sum] = upArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (event.key === "ArrowDown" || swipeDirection === "down") {
        console.log("Down");
        const [newArr, sum] = downArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (event.key === "ArrowLeft" || swipeDirection === "left") {
        console.log("Left");
        const [newArr, sum] = leftArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (event.key === "ArrowRight" || swipeDirection === "right") {
        console.log("Right");
        const [newArr, sum] = rightArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      }
    };

    if (best < score) {
      setBest(score);
      localStorage.setItem("score", JSON.stringify(score));
    }
    localStorage.setItem("currentArr", JSON.stringify(arr));
    localStorage.setItem("currentScore", JSON.stringify(score));

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [arr]);

  return (
    <StyledDivContainer>
      <StyledDivContainer style={{ widows: "450px" }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        {!isLose && <StyledH1>2048</StyledH1>}
        {isLose && <StyledH1>Game Over</StyledH1>}
        <StyledMiniHeader>
          <div>
            <StyledScore>Best : {best}</StyledScore>
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
