import styled from "styled-components";

export const LabelSearch = styled.label`
  position: relative;
  display: block;
  margin-top: 28px;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    width: 608px;
    margin: 40px auto 0;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  display: block;
  padding: 10px 40px 10px 20px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: none;
  border-radius: 20px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.04em;
  color: #535353;
  outline: none;
  transition: box-shadow 300ms linear;

  :focus {
    box-shadow: 7px 4px 14px #f59256;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
