import styled, { keyframes } from "styled-components";
import Image, { ImageProps } from "next/image";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: space-between;

  margin: 150px 5px 100px 5px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const WelcomeText = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 40px;
  }
`;

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

interface GradientBorder {
  onHover?: boolean;
}

export const GradientBorder = styled.div<GradientBorder>`
  --border-width: 4px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 300px; */
  /* height: 200px; */
  border-radius: var(--border-width);

  &::after {
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 50%;
    animation: ${moveGradient} 4s alternate infinite;
  }
`;
