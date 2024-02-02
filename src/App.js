import { StyledBigDiv, StyledCell } from "./styles/boxes";
import "./App.css";

function App() {
  const arr = ["2", "4", "8", "16", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
  return (
    <>
      <StyledBigDiv>
        {arr.map((item) => {
          return <StyledCell id={item}>{item}</StyledCell>;
        })}
      </StyledBigDiv>
    </>
  );
}

export default App;
