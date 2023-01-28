import styled from 'styled-components';

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
`;

export const BoxPet = styled.section`
  /* margin-left: 32px; */
  //width: 100%;
  margin: 0 32px;
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    //margin-bottom: 24px;
    margin-right: 32px; //add
  }
  @media (min-width: 1280px) {
    //margin-bottom: 24px;
    margin-right: 0px; //add
  }
`;
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
