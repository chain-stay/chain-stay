// animations.js
import { css, keyframes } from "styled-components";

export const colorAnim = keyframes`
  0% {
    fill: white;
  }

  50% {
    fill: var(--color-background);
  }

  100% {
    fill: white;
  }
`;

export const btnContent = keyframes`
  0% {
    outline: 0.2em solid var(--color-background);
    outline-offset: 0;
  }
`;
