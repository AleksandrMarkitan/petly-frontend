import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 272px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  svg {
    margin-left: 13px;
    fill: #111111;
    fill-opacity: 0.6;
    transition: fill 300ms linear;
  }

  :hover,
  :focus {
    svg {
      fill: #f59256;
    }
  }
`;
