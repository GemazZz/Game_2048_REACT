import { styled } from "styled-components";

export const StyledBigDiv = styled.div`
  height: 450px;
  width: 450px;
  background-color: #bbada0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
`;

export const StyledCell = styled.div`
  width: 97.5px;
  height: 97.5px;
  border-radius: 3px;
  font-size: 53px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.id === "2" || props.id === "4"
      ? "#776e65"
      : props.id === "8" ||
        props.id === "16" ||
        props.id === "32" ||
        props.id === "64" ||
        props.id === "128" ||
        props.id === "256" ||
        props.id === "512" ||
        props.id === "1024" ||
        props.id === "2048" ||
        props.id === "4096"
      ? "#f9f6f2"
      : "transparent"};
  background-color: ${(props) =>
    props.id === "2"
      ? "#eee4da"
      : props.id === "4"
      ? "#ede0c8"
      : props.id === "8"
      ? "#f2b179"
      : props.id === "16"
      ? "#f59563"
      : props.id === "32"
      ? "#f77c5f"
      : props.id === "64"
      ? "#f75f3b"
      : props.id === "128"
      ? "#edd073"
      : props.id === "256"
      ? "#f0cc64"
      : props.id === "512"
      ? "#f0cc54"
      : props.id === "1024"
      ? "#f0cc64"
      : props.id === "2048"
      ? "#f0cc64"
      : props.id === "4096"
      ? "#f0cc64"
      : "#cdc1b4"};
  transition: 0.4s;
`;

export const StyledH1 = styled.h1`
  display: inline-block;
  font-size: 50px;
`;
export const StyledLoseBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  position: relative;
  color: #000;
  transition: 0.1s;
  &:hover {
    scale: 1.2;
  }
  &:active {
    scale: 0.8;
  }
`;

export const StyledDivContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledMiniHeader = styled.div`
  width: 450px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledScore = styled.div`
  /* width: 140px; */
  /* height: 40px; */
  font-size: 25px;
  /* color: #f9f6f2; */
  font-weight: 700;
  transition: 0, 3s;
  /* background-color: #c0aca4; */
`;
