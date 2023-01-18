import styled from "styled-components";

export const P = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;

  color: rgba(17, 17, 17, 1);

  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    margin-right: 80px;
  }
`;

export const Span = styled.span`
  color: rgba(245, 146, 86, 1);
`;
