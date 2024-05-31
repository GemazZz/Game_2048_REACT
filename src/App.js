import { useState, useEffect } from "react";
import { StyledBigDiv, StyledCell, StyledH1, StyledLoseBtn, StyledDivContainer, StyledMiniHeader, StyledScore } from "./styles/boxes";
import "./App.css";
import { rightArrFunc, leftArrFunc, upArrFunc, downArrFunc, startArrFunc, isLoseFunc } from "./helper/helper";

function App() {
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("currentArr")) || startArrFunc());
  const [score, setScore] = useState(JSON.parse(localStorage.getItem("currentScore")) || 0);
  const [best, setBest] = useState(JSON.parse(localStorage.getItem("score")) || 0);
  const [touchStart, setTouchStart] = useState(null);
  const isLose = isLoseFunc(arr);

  useEffect(() => {
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
  }, [arr, score, best]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      const [newArr, sum] = upArrFunc(arr);
      setArr([...newArr]);
      setScore(score + sum);
    } else if (event.key === "ArrowDown") {
      const [newArr, sum] = downArrFunc(arr);
      setArr([...newArr]);
      setScore(score + sum);
    } else if (event.key === "ArrowLeft") {
      const [newArr, sum] = leftArrFunc(arr);
      setArr([...newArr]);
      setScore(score + sum);
    } else if (event.key === "ArrowRight") {
      const [newArr, sum] = rightArrFunc(arr);
      setArr([...newArr]);
      setScore(score + sum);
    } else if (event.key === " ") {
      setArr(startArrFunc());
      setScore(0);
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });

    document.body.classList.add("no-scroll");
    document.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > absDeltaY) {
      if (deltaX > 50) {
        const [newArr, sum] = rightArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (deltaX < -50) {
        const [newArr, sum] = leftArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      }
    } else {
      if (deltaY > 50) {
        const [newArr, sum] = downArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      } else if (deltaY < -50) {
        const [newArr, sum] = upArrFunc(arr);
        setArr([...newArr]);
        setScore(score + sum);
      }
    }

    setTouchStart(null);

    document.body.classList.remove("no-scroll");
    document.removeEventListener("touchmove", preventDefault);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <StyledDivContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onKeyDown={handleKeyDown}>
      <StyledDivContainer>
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
        {arr.map((item, index) => (
          <StyledCell key={index} id={item.toString()}>
            {item !== 0 ? item : ""}
          </StyledCell>
        ))}
      </StyledBigDiv>
    </StyledDivContainer>
  );
}

export default App;
