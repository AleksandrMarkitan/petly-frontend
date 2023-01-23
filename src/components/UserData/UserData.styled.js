import styled from "styled-components";

export const WrapperDataUser = styled.div`
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (min-width: 768px) {
    width: 280px;
    background-color: red;
    margin: 72px 0 0;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 72px;
    column-gap: 32px;
  }
`;

export const InputHidden = styled.div`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
