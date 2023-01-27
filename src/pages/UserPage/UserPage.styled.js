import styled from 'styled-components';

export const AddTitle = styled.p`
  margin-right: 15px;
  font-weight: ${p => p.theme.fontWeight.fw500};
  font-size: ${p => p.theme.fontSize.fs20};
`;

export const BtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    display: inline-flex;
  }
`;

export const BoxPet = styled.section`
  width: 100%;
  @media (min-width: 768px) {
    margin-left: 32px; //add
  }
  @media (min-width: 1280px) {
    margin-left: 0px; //add
  }
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
