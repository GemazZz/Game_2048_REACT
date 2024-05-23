import styled from "styled-components";

export const StyledBigDiv = styled.div`
  height: 450px;
  width: 450px;
  max-width: 100%;
  max-height: 100%;
  background-color: #bbada0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;

  @media (max-width: 600px) {
    height: 405px;
    width: 405px;
    gap: 10.8px;
    padding: 10.8px;
  }

  @media (max-width: 540px) {
    height: 364.5px;
    width: 364.5px;
    gap: 9.72px;
    padding: 9.72px;
  }

  @media (max-width: 486px) {
    height: 328.05px;
    width: 328.05px;
    gap: 8.748px;
    padding: 8.748px;
  }

  @media (max-width: 437px) {
    height: 295.245px;
    width: 295.245px;
    gap: 7.8732px;
    padding: 7.8732px;
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
  color: ${(props) =>
    props.id === "2" || props.id === "4"
      ? "#776e65"
      : ["8", "16", "32", "64", "128", "256", "512", "1024", "2048", "4096"].includes(props.id)
      ? "#f9f6f2"
      : "transparent"};
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
    width: 87.75px;
    height: 87.75px;
    font-size: 47.7px;
  }

  @media (max-width: 540px) {
    width: 78.975px;
    height: 78.975px;
    font-size: 42.93px;
  }

  @media (max-width: 486px) {
    width: 71.0775px;
    height: 71.0775px;
    font-size: 38.637px;
  }

  @media (max-width: 437px) {
    width: 63.96975px;
    height: 63.96975px;
    font-size: 34.7733px;
  }
`;

export const StyledH1 = styled.h1`
  display: inline-block;
  font-size: 50px;

  @media (max-width: 600px) {
    font-size: 45px;
  }

  @media (max-width: 540px) {
    font-size: 40.5px;
  }

  @media (max-width: 486px) {
    font-size: 36.45px;
  }

  @media (max-width: 437px) {
    font-size: 32.805px;
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
    width: 27px;
    height: 27px;
  }

  @media (max-width: 540px) {
    width: 24.3px;
    height: 24.3px;
  }

  @media (max-width: 486px) {
    width: 21.87px;
    height: 21.87px;
  }

  @media (max-width: 437px) {
    width: 19.683px;
    height: 19.683px;
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
    gap: 18px;
  }

  @media (max-width: 540px) {
    gap: 16.2px;
  }

  @media (max-width: 486px) {
    gap: 14.58px;
  }

  @media (max-width: 437px) {
    gap: 13.122px;
  }
`;

export const StyledMiniHeader = styled.div`
  width: 450px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 405px;
  }

  @media (max-width: 540px) {
    width: 364.5px;
  }

  @media (max-width: 486px) {
    width: 328.05px;
  }

  @media (max-width: 437px) {
    width: 295.245px;
  }
`;

export const StyledScore = styled.div`
  font-size: 25px;
  font-weight: 700;
  transition: 0.9s;

  @media (max-width: 600px) {
    font-size: 22.5px;
  }

  @media (max-width: 540px) {
    font-size: 20.25px;
  }

  @media (max-width: 486px) {
    font-size: 18.225px;
  }

  @media (max-width: 437px) {
    font-size: 16.4025px;
  }
`;
