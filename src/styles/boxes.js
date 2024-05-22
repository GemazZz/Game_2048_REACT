import styled from "styled-components";

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

  @media (max-width: 600px) {
    height: 360px;
    width: 360px;
    gap: 9.6px;
    padding: 9.6px;
  }

  @media (max-width: 480px) {
    height: 288px;
    width: 288px;
    gap: 7.68px;
    padding: 7.68px;
  }

  @media (max-width: 384px) {
    height: 230.4px;
    width: 230.4px;
    gap: 6.144px;
    padding: 6.144px;
  }
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
  color: ${(props) => (["2", "4"].includes(props.id) ? "#776e65" : "#f9f6f2")};
  background-color: ${(props) => {
    switch (props.id) {
      case "2":
        return "#eee4da";
      case "4":
        return "#ede0c8";
      case "8":
        return "#f2b179";
      case "16":
        return "#f59563";
      case "32":
        return "#f77c5f";
      case "64":
        return "#f75f3b";
      case "128":
        return "#edd073";
      case "256":
        return "#f0cc64";
      case "512":
        return "#f0cc54";
      case "1024":
      case "2048":
      case "4096":
        return "#f0cc64";
      default:
        return "#cdc1b4";
    }
  }};
  transition: 0.4s;

  @media (max-width: 600px) {
    width: 78px;
    height: 78px;
    font-size: 42.4px;
  }

  @media (max-width: 480px) {
    width: 62.4px;
    height: 62.4px;
    font-size: 33.92px;
  }

  @media (max-width: 384px) {
    width: 49.92px;
    height: 49.92px;
    font-size: 27.136px;
  }
`;

export const StyledH1 = styled.h1`
  display: inline-block;
  font-size: 50px;

  @media (max-width: 600px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }

  @media (max-width: 384px) {
    font-size: 25.6px;
  }
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
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.8);
  }

  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 480px) {
    width: 19.2px;
    height: 19.2px;
  }

  @media (max-width: 384px) {
    width: 15.36px;
    height: 15.36px;
  }
`;

export const StyledDivContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12.8px;
  }

  @media (max-width: 384px) {
    gap: 10.24px;
  }
`;

export const StyledMiniHeader = styled.div`
  width: 450px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 360px;
  }

  @media (max-width: 480px) {
    width: 288px;
  }

  @media (max-width: 384px) {
    width: 230.4px;
  }
`;

export const StyledScore = styled.div`
  font-size: 25px;
  font-weight: 700;
  transition: 0.9s;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 384px) {
    font-size: 12.8px;
  }
`;
