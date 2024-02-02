import { StyledBigDiv, StyledCell } from "./styles/boxes";
import "./App.css";
import { rightArrFunc, leftArrFunc, upArrFunc, downArrFunc } from "./helper/helper";
import { useState, useEffect } from "react";

function App() {
  const [arr, setArr] = useState([0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        console.log("Up");
        const newArr = upArrFunc(arr);
        setArr([...newArr]);
      } else if (event.key === "ArrowDown") {
        console.log("Down");
        const newArr = downArrFunc(arr);
        setArr([...newArr]);
      } else if (event.key === "ArrowLeft") {
        console.log("Left");
        const newArr = leftArrFunc(arr);
        setArr([...newArr]);
      } else if (event.key === "ArrowRight") {
        console.log("Right");
        const newArr = rightArrFunc(arr);
        setArr([...newArr]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [arr]);

  return (
    <>
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
    </>
  );
}

export default App;
