import styled from "styled-components";

export const LogoText = styled.span`
  display: block;
  margin-right: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;

  color: rgba(17, 17, 17, 1);

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Span = styled.span`
  color: rgba(245, 146, 86, 1);
`;
