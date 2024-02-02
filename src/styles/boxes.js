import { styled } from "styled-components";

export const StyledBigDiv = styled.div`
  height: 450px;
  width: 450px;
  background-color: #bbada0;
  border-radius: 6px;
  display: flex;
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
        props.id === "1024"
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
      ? "##f0cc64"
      : "#cdc1b4"};
  transition: 0.1s;
`;
