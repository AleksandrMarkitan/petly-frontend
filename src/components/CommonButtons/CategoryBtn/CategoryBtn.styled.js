import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 28px;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  color: #111111;
  transition: color 300ms linear, background-color 300ms linear;

  :hover,
  :focus {
    background-color: #f59256;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  }
`;
